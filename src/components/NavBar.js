import '../App.css';

export default function NavBar() {

    const links = [
        { name: "Home",
          href: "./#home"
        },
        { name: "About",
          href: "./#about"
        },
        { name: "Projects",
          href: "./#projects"
        },
        { name: "Contact",
          href: "./#contact"
        }
    ];
  
    return (
        <header class="header">
            <div class="header__content">
                <div class="header__logo-container">
                    <div class="header__logo-img-cont">
                        <img src="" alt="Taran Gill Logo" class="header__logo-img" />
                    </div>
                    <span class="header__logo-sub" href="#home">Taran Gill</span>
                </div>

                <div class="header__main">
                    <ul class="header__links">
                        {links.map(element => 
                            <li class="header__link-wrapper">
                                <a href={element.href} class="header__link"> {element.name} </a>
                            </li>
                        )}
                    </ul>

                    <div class="header__main-ham-menu-cont">
                        <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" class="header__main-ham-menu-close d-none" />
                    </div>
                </div>
            </div>

            <div class="header__sm-menu">
            <div class="header__sm-menu-content">
                <ul class="header__sm-menu-links">
                    {links.map(element => 
                        <li class="header__sm-menu-link">
                            <a href={element.href}> {element.name} </a>
                        </li>
                    )}
                </ul>
            </div>
            </div>
        </header>
    )
};
