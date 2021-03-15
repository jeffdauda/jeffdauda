import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thunmbnail(props){
    return (
        <div className="projects">
            <Link to="">
                <div className="projects-image">
                    <img src="" alt="Projects Image"/>

                </div>
                <div className="project-title">{props.title}</div>
                <div className="prject-category">{props.category}</div>

            </Link>

        </div>
    );
}
export default Thunmbnail;