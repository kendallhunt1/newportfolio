import React from 'react';
import '../Styles/about.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="informationWrapper">
                <div className="aboutInformation">
                    <h1>About</h1>
                    <div className="line"></div>
                    <p>
                        Full-stack developer that focuses on consumer application usage. I started in web development
                        on the front-end of software, but eventually made my way into back-end development as I wanted
                        to create full-scale applications that have the capability to do what other applications don't.
                        Depending on the application the technologies that I use vary, such as relational, and non-relational
                        databases, security measures, and more. I focus on delivering software efficiently, and creating
                        applications that are a breeze to use.<br />
                        Aside from development I love to spend time with those that I love, I love learning, and I cherish every
                        second that I have.
                    </p>
                </div>
                <div className="aboutImage">
                    <img src="/images/about.png" alt="About Image" />
                </div>
            </div>
        </section>
    )
}

export default About;