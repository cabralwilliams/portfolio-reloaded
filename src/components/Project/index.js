import React, { useState } from "react";

function Project(props) {

    return(
        <div className="flex-project">
            <h3>{props.projecttitle}</h3>
            <div className="flex-image">
                <img src={props.imagepath} alt={props.imagealt}/>
            </div>
            <div className="flex-row-links">
                <a href={props.githubrepo}>GitHub Repository</a>
                <a href={props.livelink}>Live Application</a>
            </div>
        </div>
    );
}

export default Project;