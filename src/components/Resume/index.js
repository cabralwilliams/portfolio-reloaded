import React from "react";

function Resume(props) {

    return(
        <div className="flex-row row-to-column" id="resume">
            <h2 className="flex-title">Resume</h2>
            <div className="flex-content">
                <div className="flex-column-start-left">
                    <div><a href={require(`../../assets/documents/cabralwilliams_resume.docx`)} className="red-pill-font a-no-decor">Resume</a></div>
                    <div className="proficiencies">
                        <h3>Front-End Proficiencies</h3>
                        <ul className="proficiency-li">
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Handlebars</li>
                            <li>React</li>
                            <li>Foundation</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="proficiencies">
                        <h3>Back-End Proficiencies</h3>
                        <ul className="proficiency-li">
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;