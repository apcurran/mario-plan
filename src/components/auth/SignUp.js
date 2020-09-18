import React, { Component } from 'react';

export default class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" id="firstName"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} type="text" name="lastName" id="lastName"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" name="email" id="email"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}
