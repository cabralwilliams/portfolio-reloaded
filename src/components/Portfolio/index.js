import React from "react";
import Project from "../Project";

//Tech Ticket System
//What is on your mind
//Over Under
//Discover History
//Weather Application
//Some Things Math

/*
https://github.com/rprice000/tech_ticket_system
https://secure-tundra-62908.herokuapp.com/

https://github.com/cabralwilliams/what-is-on-your-mind
https://quiet-woodland-72442.herokuapp.com/

https://github.com/cabralwilliams/over-under
https://peaceful-reaches-93634.herokuapp.com/

https://github.com/cabralwilliams/discover-history
https://cabralwilliams.github.io/discover-history/

https://github.com/cabralwilliams/weather-dashboard
https://cabralwilliams.github.io/weather-dashboard/

https://github.com/cabralwilliams/some-things-math
https://cabralwilliams.github.io/some-things-math/
*/

function Portfolio(props) {
    //project array whose objects' values will be passed as props to the imported Project component
    const projects = [
        {
            imagealt: 'Tech Ticket System landing page',
            projecttitle: 'Tech Ticket System',
            githubrepo: 'https://github.com/rprice000/tech_ticket_system',
            livelink: 'https://secure-tundra-62908.herokuapp.com/'
        },
        {
            imagealt: 'Fictionalized Julius Caesar message board discussion',
            projecttitle: 'What Is On Your Mind?!?',
            githubrepo: 'https://github.com/cabralwilliams/what-is-on-your-mind',
            livelink: 'https://quiet-woodland-72442.herokuapp.com/'
        },
        {
            imagealt: 'Progressive web application to track a budget',
            projecttitle: 'Over-Under',
            githubrepo: 'https://github.com/cabralwilliams/over-under',
            livelink: 'https://peaceful-reaches-93634.herokuapp.com/'
        },
        {
            imagealt: 'Featured display of an important event in history that occurred today',
            projecttitle: 'Discover History',
            githubrepo: 'https://github.com/cabralwilliams/discover-history',
            livelink: 'https://cabralwilliams.github.io/discover-history/'
        },
        {
            imagealt: 'Is it really always sunny in Philadelphia?',
            projecttitle: 'Weather Dashboard',
            githubrepo: 'https://github.com/cabralwilliams/weather-dashboard',
            livelink: 'https://cabralwilliams.github.io/weather-dashboard/'
        },
        {
            imagealt: 'Landing page view with links to learn some things math',
            projecttitle: 'Some Things Math',
            githubrepo: 'https://github.com/cabralwilliams/some-things-math',
            livelink: 'https://cabralwilliams.github.io/some-things-math/'
        }
    ];
    return(
        <div className="flex-row row-to-column" id="portfolio">
            <h2 className="flex-title">Portfolio</h2>
            <div className="flex-row flex-content">
                {projects.map((project, i) => (
                    <Project key={i} imagepath={require(`../../assets/images/${i}.jpg`)} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;