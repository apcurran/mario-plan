import React from 'react';

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti deleniti quod porro! Voluptatem aspernatur, aliquam dicta voluptas, dolorem fuga harum ducimus fugit corrupti inventore doloremque nesciunt ipsam laboriosam delectus!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <h3>Posted by Alex Curran</h3>
                    <p>September 2, 2 PM</p>
                </div>
            </div>
        </div>
    );
}
