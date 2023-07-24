import React, {Component} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {Box, Typography} from '@mui/material'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

const Result = props => (
    <tr>
        <td>{props.result.prediction}</td>
        <td>{props.result.pdist}</td>
        <td>{props.result.class}</td>
        <td>
            <button className="btn btn-primary" onClick={() => { props.deleteResult(props.result._id) }}>delete</button> 
        </td>
    </tr>
)

class MemberPage extends Component{

    constructor(props){
        super(props)

        this.onChangeImage = this.onChangeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteResult = this.deleteResult.bind(this)

        this.state = {
            image: null,
            tempResult: '',
            tempResult2: '',
            tempResult3: '',
            tempResult4: '',
            username: '',
            password: '',
            results: [],
            idtag: ''
        }
    }

    componentDidMount(){
        let {id} = this.props.params
        this.setState({idtag: `/edituser/${id}`})
        axios.get(`http://localhost:5002/users/${id}`).then(res => {
            this.setState({
                username: res.data.username,
                password: res.data.password
            })
        })
        .catch(error => console.log(error))
        axios.get('http://localhost:5002/results/').then(res => {
            this.setState({results: res.data})
        })
        .catch(error => console.log(error))
    }

    onChangeImage(e){
        this.setState({image: e.target.files[0]})
        console.log('/edituser/'+this.state.idtag)
    }

    deleteResult(id){
        axios.delete('http://localhost:5002/results/'+id).then(res => console.log(res.data))
        this.setState({
            results: this.state.results.filter(el => el._id !== id)
        })
    }

    onSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", this.state.image);
        axios.post("http://localhost:5001/",formData).then(res => {
            this.setState({
                tempResult: res.data.result,
                tempResult2: res.data.result2,
                tempResult3: res.data.result3,
                tempResult4: res.data.result4,
            })
            const result = {
                username: this.state.username,
                prediction: res.data.result,
                pdist: res.data.result2,
                class: res.data.result4
            }
            axios.post("http://localhost:5002/results/add", result).then(res => console.log(res.data))
            this.setState(prev => ({
                results: [...prev.results, result]
            }))
        }); 
    }

    resultsList(){
        return this.state.results.map(x=>{
            if(x.username===this.state.username){
                return <Result result={x} deleteResult={this.deleteResult} key={x._id}/>
            }
            return null
        })
    }
    
    render(){
        return(
            <Box sx={{paddingTop: '100px', paddingLeft: '20px', paddingRight: '20px'}}>
                <div className="container-fluid">
                    <h3>Welcome {this.state.username}</h3>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Input the RNA-seq data sample*</label>
                            <input type="file" accept="image/*"required onChange={this.onChangeImage} />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Predict" className="btn btn-primary" />
                        </div> 
                    </form>
                    <div>
                        <p>{this.state.tempResult}</p>
                        <p>{this.state.tempResult2}</p>
                        <p>{this.state.tempResult3}</p>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h3>Previous Predictions</h3>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Prediction</th>
                                    <th>P-Distribution</th>
                                    <th>Class</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.resultsList()}
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <p>*: Raw RNA-seq data must be processed via dimensionality reduction before submitting</p>
                    <br/>
                    <Link to={this.state.idtag}><Typography variant="h5">Change username/password</Typography></Link>
                </div>
            </Box>
        )
    }
}

export default withParams(MemberPage)