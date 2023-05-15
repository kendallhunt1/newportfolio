import React from 'react';
import '../Styles/footer.css';
import { Link, Element } from 'react-scroll';


const Footer = () => {
    return (
        <section className="footer">
            <div className="footerInformation">
                <div className="socialLinks">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                </div>
                <div className="footerLinks">
                    <Link to="about" smooth={true} duration={500} className="bannerButton">About</Link>
                    <Link to="work" smooth={true} duration={500} className="bannerButton">Work</Link>
                    <Link to="skills" smooth={true} duration={500} className="bannerButton">Skills</Link>
                </div>
            </div>
        </section>
    )
}

export default Footer;