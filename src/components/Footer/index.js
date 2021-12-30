import React, { useState } from "react";
import ReloadFooter from "../ReloadFooter";

function Footer(props) {

    return(
        <footer>
            <ReloadFooter />
            <div className="flex-row" id="logo-div">
                <div><a href="https://github.com/cabralwilliams"><img src={require(`../../assets/logos/GitHub-Mark-Light-32px.png`)} alt="Github logo" /></a></div>
                <div><a href="https://www.linkedin.com/in/cabral-williams-8829366/"><img src={require(`../../assets/logos/LI-In-Bug.png`)} alt="LinkedIn logo" className="logo1" /></a></div>
                <div><a href="https://stackoverflow.com/users/17784199/cabralwilliams"><img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="Stack Exchange Logo" className="logo2" /></a></div>
            </div>
            <ReloadFooter />
        </footer>
    );
}

export default Footer;