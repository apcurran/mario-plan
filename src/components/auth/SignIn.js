import React, { Component } from 'react';

export default class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);
    };

    handleChange = (event) => {
        this.setState({
            // Target input by id (either password or email)
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" name="email" id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
