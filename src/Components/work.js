import React from 'react';
import '../Styles/work.css';

const Work = () => {
    return (
        <section className="work" id="work">
            <h1>My Work</h1>
            <div className="workWrapper">
                {/* add years to my work */}
                <a href="#">
                    <img src="/images/texasoil.png" alt="GoBackz" />
                </a>
                <a href="#">
                    <img src="/images/focustracks.png" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/nasaapi.png" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/nextlevelbets.png" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/supremedetailing.png" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/taylormade.jpg" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/golfsidekick.png" alt="My Work" />
                </a>
                <a href="#">
                    <img src="/images/portfolio.png" alt="My Work" />
                </a>
            </div>
        </section>
    )
}

export default Work;