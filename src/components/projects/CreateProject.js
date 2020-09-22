import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
    state = {
        title: "",
        content: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.createProject(this.state);
        // Then, redirect to home page
        this.props.history.push("/");
    };

    handleChange = (event) => {
        this.setState({
            // Target input by id
            [event.target.id]: event.target.value
        });
    };

    render() {
        const { auth } = this.props;

        if (!auth.uid) {
            return <Redirect to="/signin" />;
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" name="title" id="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea onChange={this.handleChange} className="materialize-textarea" name="content" id="content"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);