import '../App.css';
import ContactSideBar from './ContactSideBar.js';

export default function HomePage() {
    return (
        <section className="home-hero" id="home">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hi, I'm Taran Gill</h1>
            
                <div className="home-hero__info">
                    <p className="text-primary">
                        I'm a <strong>Software Engineer</strong> interested in cloud computing, machine learning, and autonomous systems!
                    </p>
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
