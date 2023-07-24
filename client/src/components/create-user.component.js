import React, {Component} from 'react';
import axios from 'axios';
import {Box} from '@mui/material'

export default class CreateUser extends Component{
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername(e){
        this.setState({username: e.target.value})
    }

    onChangePassword(e){
        this.setState({password: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        } 

        axios.post('http://localhost:5002/users/add',user).then(res => alert(res.data) )
        .catch(error => console.log(error))

        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return(
            <Box sx={{paddingTop: '100px', paddingLeft: '30px'}}>
                <div className="container" style={{width: '800px'}}>
                    <h3>Create an Account:</h3>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" value={this.state.username} onChange={this.onChangeUsername} placeholder="username" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="password" />
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Create Account" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </Box>
        )
    }
}
