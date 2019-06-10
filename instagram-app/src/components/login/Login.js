import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    login = event => {
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="username" onChange={this.changeHandler} placeholder="Username" required />
                    <input type="password" name="password" onChange={this.changeHandler} placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
