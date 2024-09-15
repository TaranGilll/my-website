import '../App.css';
import ResumeIcon from "../icons/resume-footer.svg";
import EmailIcon from "../icons/email-footer.svg";

export default function ContactFooter() {

    const socialProfiles = [
        { name: "Taran Gill LinkedIn",
          url: "https://linkedin.com/in/tarangill3",
          icon: "https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png",
          className: "main-footer__icon"
        },
        { name: "Taran Gill GitHub",
          url: "https://github.com/tarangilll",
          icon: "https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png",
          className: "main-footer__icon"
        },
        { name: "Taran Gill Email",
          url: "mailto:t26gill@uwaterloo.ca",
          icon: EmailIcon,
          className: "main-footer__icon"
        },
        { name: "Taran Gill Resume",
          url: "https://taranswebsite.s3.amazonaws.com/resume.pdf",
          icon: ResumeIcon,
          className: "main-footer__icon_resume"
        } 
    ];

    return (
        <footer className="main-footer" id="contact">
            <div className="main-container">
            <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
                <h2 className="heading heading-sm main-footer__heading-sm">
                    <span>Links</span>
                </h2>

                <div className="main-footer__social-cont">
                    {socialProfiles.map(element => 
                        <a target="_blank" rel="noreferrer" href={element.url} title={element.name} key={element.name}>
                            <img className={element.className} src={element.icon} alt={element.name} />
                        </a>
                    )}
                </div>
            </div>

            <div className="main-footer__row main-footer__row-2">
                <h2 className="heading heading-sm text-lt">Taran Gill</h2>
                <p className="main-footer__short-desc">
                    I love connecting with fellow innovators who share my enthusiasm for developing software solutions.
                    Feel free to reach out via LinkedIn or email!
                </p>
            </div>
            </div>

            <div className="main-footer__lower"> 
                Copyright 2023. Made by
                <a rel="noreferrer" target="_blank" href="https://tarangill.org">Taran Gill</a>
            </div>
        </div>
        </footer>
    )
};