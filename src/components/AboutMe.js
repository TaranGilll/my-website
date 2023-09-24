import '../App.css';

export default function AboutMe() {

  const skills = ["C++", "C", "Python", "Java", "Javascript", "HTML/CSS", "SQL", "Bash"];
  const technologies = ["AWS", "React", "DynamoDB", "NoSQL", "Docker", "Linux", "Postman", "XCode", "Git"];

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
        </h2>
        
        <div className="about__content">
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {skills.map(element => 
                <div className="skills__skill">{element}</div>
              )}
            </div>
            <h3 className="about__content-title" style={{marginTop: "10px"}}>My Tech Portfolio</h3>
            <div className="skills">
              {technologies.map(element => 
                <div className="skills__skill">{element}</div>
              )}
            </div>
          </div>

          <div className="about__content-main">
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Frontend Web Developer</strong> building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                <strong>Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a rel="noreferrer" href="https://linkedin.com/in/rammcodes" target="_blank">Linkedin</a>
                where I post useful content related to Web Development and
                Programming
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
};
