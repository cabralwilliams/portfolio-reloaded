import React, { useState } from "react";
import ReloadFooter from "../ReloadFooter";

function Footer(props) {

    return(
        <footer>
            <ReloadFooter />
            <span className="name-span">Cabral Williams</span>
            <ReloadFooter />
        </footer>
    );
}

export default Footer;