import '../App.css';

export default function AboutMe() {

  const skills = ["C++", "C", "Python", "Java", "Javascript", "HTML/CSS", "SQL", "Bash"];
  const technologies = ["AWS", "AWS Lambda", "AWS APIGateway", "AWS CloudFormation", "AWS S3", "AWS DynamoDB", "React", "NoSQL", "Docker", "Linux", "Postman", "XCode", "Git"];

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
                <div className="skills__skill" key={element}>{element}</div>
              )}
            </div>
            <h3 className="about__content-title" style={{marginTop: "10px"}}>My Tech Portfolio</h3>
            <div className="skills">
              {technologies.map(element => 
                <div className="skills__skill" key={element}>{element}</div>
              )}
            </div>
          </div>

          <div className="about__content-main">
            <h3 className='about__content-title'>Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                From creating full-stack applications to tackling intricate coding challenges, I'm extremely <strong>passionate about technology and fostering connections</strong>.
              </p>
              <p className="about__content-details-para">
                Currently, I'm part of a dynamic team at <strong>YuJa, a startup based in San Jose</strong>, focused on 
                enhancing student engagement in classrooms. Working in a close-knit team of four, 
                we're bringing a new student response software called Engage to market.
              </p>
              <p className="about__content-details-para">
                As a <strong>Software Engineering</strong> student at the <strong>University of Waterloo</strong>,
                I'm constantly exploring cutting-edge advancements in the tech world. 
                Beyond coding, you'll find me on the soccer pitch or enjoying the great outdoors!!
              </p>
              <p className="about__content-details-para">
                I'm currently seeking <strong>Summer 2024 Internships</strong> and would love to connect 
                with fellow innovators who share my enthusiasm for developing software solutions. 
                Feel free to reach out to me via <strong>LinkedIn or email!</strong>
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
};
