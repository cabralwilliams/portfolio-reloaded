import React, { useState } from "react";

function Navigation(props) {
    const siteLinks = [
        {
            name: "About Me",
            href: "#about",
            isActive: true
        },
        {
            name: "Portfolio",
            href: "#portfolio",
            isActive: false
        },
        {
            name: "Contact",
            href: "#contact",
            isActive: false
        },
        {
            name: "Resume",
            href: "#resume",
            isActive: false
        }
    ];
    return(
        <nav id="site-nav">
            <ul className="flex-row" id="main-ul">
                {
                    siteLinks.map((link, i) => (
                        <li key={i} className="flex-row-li">
                            <a href={link.href} className={`${link.isActive && 'navActive'}`}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;