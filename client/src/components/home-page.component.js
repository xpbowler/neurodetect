import React, {Component} from 'react';
import axios from 'axios';

export default class HomePage extends Component{

    constructor(props){
        super(props)

        this.onChangeImage = this.onChangeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            image: null,
            prediction: '',
            prediction2: '',
            prediction3: ''
        }
    }

    onChangeImage(e){
        this.setState({image: e.target.files[0]})
    }

    onSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", this.state.image);
        axios.post("http://localhost:5001/",formData).then(res => {
            this.setState({
                prediction: res.data.result,
                prediction2: res.data.result2,
                prediction3: res.data.result3
            })
        }); 
    }
    
    render(){
        return(
            <div className="container-fluid">
                <h3>Welcome Guest</h3>
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
                    <p>{this.state.prediction}</p>
                    <p>{this.state.prediction2}</p>
                    <p>{this.state.prediction3}</p>
                </div>
            </div>
        )
    }
}

