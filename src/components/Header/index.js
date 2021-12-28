import React, { useState } from "react";
import Navigation from '../Navigation';
import Reloaded from "../Reloaded";

function Header(props) {

    return(
        <header>
            <Reloaded />
            <h2 className="tnr" id="site-title">Portfolio Reloaded</h2>
            <Navigation />
        </header>
    );
}

export default Header;