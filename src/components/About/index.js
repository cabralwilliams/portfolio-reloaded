import React, { useState } from "react";
import avatar from "../../assets/images/avatar.svg";
import avatar2 from "../../assets/images/avatar2.svg";

function About(props) {
    const avatarNum = Math.floor(Math.random()*100)%2 === 0 ? avatar : avatar2;
    return(
        <div className="flex-row" id="about">
            <h2 className="flex-title">About Me</h2>
            <div className="flex-content">
                <div>
                    <img src={avatarNum} className="avatar-dim" alt='Avatar' />
                </div>
                <div className="flex-column">
                    <p>This is some temporary text that I'm writing until I can come up with more information to add here.  And, as you can no doubt divine from the scheme of this site, I am a huge fan of the Matrix movies.</p>
                </div>
            </div>
        </div>
    );
}

export default About;