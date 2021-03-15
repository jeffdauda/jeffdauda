import React from "react";
import Thumbnail from "./Thumbnail.js";
import './App.css';


function Projects(props){
    return(
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="/project1"
                image=""
                title="Breast cancer detection model"
                category="Python, Artificial Intelligence"
                
            />
            <Thumbnail
                link="/project2"
                image=""
                title="Port scanner"
                category="Python, Cybersecurity"
                
            />
            <Thumbnail
                link="/project3"
                image=""
                title="Diabetes Detection model"
                category="Python, Artificial Intelligence"
                
            />
            <Thumbnail
                link="/project4"
                image=""
                title="Family tree"
                category="Python, Misc"
                
            />
        </div>
    );
}
export default Projects;
