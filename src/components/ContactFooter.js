import '../App.css';

export default function ContactFooter() {

    const socialProfiles = [
        { name: "Taran Gill LinkedIn",
          url: "https://linkedin.com/in/tarangill3",
          icon: "https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
        },
        { name: "Taran Gill GitHub",
          url: "https://github.com/tarangilll",
          icon: "https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png",
        },
        { name: "Taran Gill Resume",
          url: "",
          icon: "https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
        },
        { name: "Taran Gill Email",
          url: "",
          icon: "https://d33wubrfki0l68.cloudfront.net/c7b1e51b8c75a239d68af3d42866666580f390ec/dcc7c/assets/png/blog-ico.png"
        }
    ];

    return (
        <footer class="main-footer" id="contact">
            <div class="main-container">
            <div class="main-footer__upper">
            <div class="main-footer__row main-footer__row-1">
                <h2 class="heading heading-sm main-footer__heading-sm">
                    <span>Links</span>
                </h2>

                <div class="main-footer__social-cont">
                    {socialProfiles.map(element => 
                        <a target="_blank" rel="noreferrer" href={element.url}>
                            <img class="main-footer__icon" src={element.icon} alt={element.name} />
                        </a>
                    )}
                </div>
            </div>

            <div class="main-footer__row main-footer__row-2">
                <h2 class="heading heading-sm text-lt">Taran Gill</h2>
                <p class="main-footer__short-desc">
                    Aspiring Software Engineer!
                </p>
            </div>
            </div>

            <div class="main-footer__lower"> 
                Copyright 2023. Made by
                <a rel="noreferrer" target="_blank" href="https://tarangill.org">Taran Gill</a>
            </div>
        </div>
        </footer>
    )
};