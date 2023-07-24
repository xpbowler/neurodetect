import React, {Component} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Box} from '@mui/material'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class EditUser extends Component{
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username:'',
            password: '',
            idtag: '',
        }
    }

    

    componentDidMount(){
        let { id } = this.props.params;
        this.setState({idtag: `http://localhost:5002/users/update/${id}`})
        axios.get(`http://localhost:5002/users/${id}`).then(res =>{
            this.setState({
                username: res.data.username,
                password: res.data.password
            })
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.post(this.state.idtag,user).then((res) => console.log(res.data))
        window.location = '/'
    }

    render(){
        return(
            <Box sx={{paddingTop: '100px', paddingLeft: '40px'}}>
                <div style={{width: '800px'}} className="container">
                    <h3>Edit Username/Password for {this.state.username}</h3>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" required class="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" required class="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Complete changes" class="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </Box>
        )
    }
}

export default withParams(EditUser)