import '../App.css';

export default function AboutMe() {

  const skills = ["AWS", "C++", "C", "React", "Javascript", "HTML", "CSS", "Java", "SQL", "Add More"];

  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
        </h2>
        
        <div class="about__content">
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              {skills.map(element => 
                <div class="skills__skill">{element}</div>
              )}
            </div>
          </div>

          <div class="about__content-main">
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong>Projects</strong> section.
              </p>
              <p class="about__content-details-para">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a rel="noreferrer" href="https://linkedin.com/in/rammcodes" target="_blank">Linkedin</a>
                where I post useful content related to Web Development and
                Programming
              </p>
              <p class="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
};
