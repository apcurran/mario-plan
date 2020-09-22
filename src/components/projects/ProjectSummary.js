import React from 'react';

export default function ProjectSummary({ project }) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Alex Curran</p>
                <p className="grey-text">September 3, 2 PM</p>
            </div>
        </div>
    );
}
