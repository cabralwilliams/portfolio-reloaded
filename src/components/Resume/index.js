import React from "react";

function Resume(props) {

    return(
        <div className="flex-row" id="resume">
            <h2 className="flex-title">Resume</h2>
            <div className="flex-content">
                <div className="flex-column-start-left">
                    <div><a href={require(`../../assets/documents/cabralwilliams_resume.docx`)} className="red-pill-font a-no-decor">Resume</a></div>
                    <p>Some resume content will go here.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Resume;