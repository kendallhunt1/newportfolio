import React from 'react';
import '../Styles/about.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="informationWrapper">
                <div className="aboutInformation">
                    <h1>About</h1>
                    <div className="line"></div>
                    <p>The About page is the core description of your website. Here is where you let 
                        clients know what your website is about. You can edit all of this text and replace 
                        it with what you want to write. For example you can let them know how long you have 
                        been in business, what makes your company special, what are its core values and more.
                        <br/>Edit your About page from the Pages tab by clicking the edit button.
                    </p>
                </div>
                <div className="aboutImage">
                    <img src="https://wagsrealestate.com/wp-content/uploads/2018/06/commercial-right.png" alt="About Image" />
                </div>
            </div>
        </section>
    )
}

export default About;