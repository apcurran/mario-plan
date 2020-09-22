import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.signIn(this.state);
    };

    handleChange = (event) => {
        this.setState({
            // Target input by id (either password or email)
            [event.target.id]: event.target.value
        });
    };

    render() {
        const { authError, auth } = this.props;

        if (auth.uid) {
            return <Redirect to="/" />;
        }

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
        <p className="red-text center">{authError ? authError : null}</p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);