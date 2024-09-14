import '../App.css';
import ContactSideBar from './ContactSideBar.js';

export default function HomePage() {
    return (
        <section className="home-hero" id="home">
            <div className="home-hero__content">
                <div className="homepage-image-section">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1 className="heading-primary">Hi, I'm Taran Gill</h1>

                        <div className="home-hero__info">
                            <p className="text-primary">
                                I'm a <strong>Software Engineer</strong> interested in robotics, machine learning, and autonomous systems!
                            </p>
                        </div>
                    </div>
                    
                    <div className="header__logo-home-page">
                        <img src="https://taranswebsite.s3.amazonaws.com/icon.jpeg" alt="Taran Gill Logo" className="header__logo-img" />
                    </div>
                </div>
            

                <div className="home-hero__cta">
                    <a href="./#projects" className="btn btn--bg">Projects</a>
                </div>
            </div>

            <ContactSideBar/>

            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    )
};
