import React from 'react';
import '../Styles/skills.css';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skillsWrapper">
                <div className="skill">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="skill"/>
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <img src="https://www.itnetwork.sk/images/10733/nodejs/nodejs_logo.png" alt="skill"/>
                    <span>Node.js</span>
                </div>
                <div className="skill">
                    <img src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif" alt="skill"/>
                    <span>MongoDB</span>
                </div>
                <div className="skill">
                    <img src="https://miro.medium.com/v2/resize:fit:1050/1*acfAKaDI7uv5GyFnJmiPhA.png" alt="skill"/>
                    <span>Mongoose</span>
                </div>
                <div className="skill">
                    <img src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="skill"/>
                    <span>Express</span>
                </div>
                <div className="skill">
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="skill"/>
                    <span>MySQL</span>
                </div>
                <div className="skill">
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="skill"/>
                    <span>Git</span>
                </div>
                <div className="skill">
                    <img src="https://www.vectorlogo.zone/logos/heroku/heroku-ar21.png" alt="skill"/>
                    <span>Heroku</span>
                </div>
                <div className="skill">
                    <img src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="skill"/>
                    <span>HTML/CSS/SCSS</span>
                </div>
                <div className="skill">
                    <img src="https://s3-alpha.figma.com/hub/file/2715129294/a73c1de8-3955-4b6f-ba3e-eb5899d546fb-cover.png" alt="skill"/>
                    <span>Graphic Design</span>
                </div>
            </div>
        </section>
    )
}

export default Skills;