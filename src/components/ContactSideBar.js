import '../App.css';

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
        { name: "Taran Gill Resume",
          url: "",
          icon: "https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
        },
        { name: "Taran Gill Email",
          url: "mailto:t26gill@uwaterloo.ca",
          icon: "https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
        }
    ];

    return (
        <div class="home-hero__socials">
            {socialProfiles.map(element => 
                <div class="home-hero__social">
                    <a href={element.url} class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                    <img src={element.icon} alt={element.name} class="home-hero__social-icon" />
                    </a>
                </div>
            )}
        </div>
    )
};
