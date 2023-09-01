import '../App.css';
import ContactSideBar from './ContactSideBar.js';

export default function HomePage() {
    return (
        <section class="home-hero">
            <div class="home-hero__content">
            <h1 class="heading-primary">Hi, I'm Taran Gill</h1>
            <div class="home-hero__info">
                <p class="text-primary">
                    A <strong>Software Engineer</strong> interested in cloud computing, full stack development, and autonomous systems!
                </p>
            </div>
            <div class="home-hero__cta">
                <a href="./#projects" class="btn btn--bg">Projects</a>
            </div>
            </div>
            <ContactSideBar/>
            <div class="home-hero__mouse-scroll-cont">
            <div class="mouse"></div>
            </div>
        </section>
    )
};
