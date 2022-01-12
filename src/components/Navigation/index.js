import React, { useState } from "react";

function Navigation(props) {
    //List of site links - the about me link is set to display by default
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

    const {selectedLink, setSelectedLink} = props;

    const [links, setLinks] = useState(siteLinks);

    //function to update the current active link so that it will be rendered in red rather than in blue
    //by setting the active link, this also allows the information to be passed back up the component tree so that App.js knows which component page to render
    function updateLinks(event) {
        event.preventDefault();
        if(event.target.matches('a')) {
            const linkname = event.target.getAttribute('href').substring(1);
            console.log(linkname);
            const newLinks = links.map(link => {
                if(link.href.substring(1) === linkname) {
                    link.isActive = true;
                } else {
                    link.isActive = false;
                }
                return link;
            });
            setLinks(newLinks);
            setSelectedLink(linkname);
            console.log(links);
        }
    }
    return(
        <nav id="site-nav" onClick={updateLinks}>
            <ul className="flex-row" id="main-ul">
                {
                    links.map((link, i) => (
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