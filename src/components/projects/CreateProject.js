import React, { Component } from 'react';

export default class CreateProject extends Component {
    state = {
        title: "",
        content: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);
    };

    handleChange = (event) => {
        this.setState({
            // Target input by id
            [event.target.id]: event.target.value
        });
    };

    render() {
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
