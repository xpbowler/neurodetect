import React, {Component} from 'react'
import axios from 'axios'
import {Box} from '@mui/material'

export default class Login extends Component{

    constructor(props) {
        super(props)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            username: '',
            password: '',
            users: [],
            valid: true,
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5002/users/').then(res => {
            this.setState({ users: res.data })
        })
        .catch(error => console.log(error))
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value})
    }

    onChangePassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        this.state.users.map(x=>{
            if(this.state.username===x.username && this.state.password===x.password){
                window.location = '/users/'+x._id
            } else {
                this.setState({valid: false})
            }
            return null
        })
    }

    render(){
        return(
            <Box sx={{paddingTop: '100px', paddingLeft: '30px'}}>
                <div className="container" style={{width: '800px'}}>
                    <h3>NeuroDetect Login</h3>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text"  class="form-control" required value={this.state.username} onChange={this.onChangeUsername} placeholder="username"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input  type="text"  class="form-control" required value={this.state.password} onChange={this.onChangePassword} placeholder="password"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary"/> 
                        </div>
                    </form>
                    {this.state.valid ? (
                        <></>
                    ): (
                        <>
                            <p>Invalid username and/or password</p>
                        </>
                    )}
                </div>
            </Box>
        )
    }
}