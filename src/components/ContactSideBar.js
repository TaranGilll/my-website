import '../App.css';
import ResumeIcon from "../icons/resume.svg";
import EmailIcon from "../icons/email.svg";

export default function HomePage() {

    const socialProfiles = [
        { name: "Taran Gill LinkedIn",
          url: "https://linkedin.com/in/tarangill3",
          icon: "https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
        },
        { name: "Taran Gill GitHub",
          url: "https://github.com/tarangilll",
          icon: "https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg",
        },
        { name: "Taran Gill Email",
          url: "mailto:t26gill@uwaterloo.ca",
          icon: EmailIcon
        },
        { name: "Taran Gill Resume",
          url: "https://taranswebsite.s3.amazonaws.com/resume.pdf",
          icon: ResumeIcon
        } 
    ];

    return (
        <div className="home-hero__socials">
            {socialProfiles.map(element => 
                <div className="home-hero__social" key={element.name}>
                    <a href={element.url} className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                      <img src={element.icon} alt={element.name} className="home-hero__social-icon" />
                    </a>
                </div>
            )}
        </div>
    )
};
