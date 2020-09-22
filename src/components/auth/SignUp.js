import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.signUp(this.state);
    };

    handleChange = (event) => {
        this.setState({
            // Target input by id (either password or email)
            [event.target.id]: event.target.value
        });
    };

    render() {
        const { auth, authError } = this.props;

        if (auth.uid) {
            return <Redirect to="/" />;
        }

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
                        <p className="red-text center">
                            {authError ? authError : null}
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);