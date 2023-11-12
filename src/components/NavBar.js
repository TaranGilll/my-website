import '../App.css';
import MyIcon from "../icons/icon.jpeg";
import React, {useState} from 'react';

export default function NavBar() {
    const [optionsExpanded, setOptionsExpanded] = useState(false);

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
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <a className="header__logo-img-cont" href="./#home">
                        <img src={MyIcon} alt="Taran Gill Logo" className="header__logo-img" />
                    </a>
                    <a className="header__logo-sub" href="./#home">Taran Gill</a>
                </div>

                <div className="header__main">
                    <ul className="header__links">
                        {links.map(element => 
                            <li className="header__link-wrapper" key={element.name}>
                                <a href={element.href} className="header__link"> {element.name} </a>
                            </li>
                        )}
                    </ul>

                    <div className="header__main-ham-menu-cont">
                        {!optionsExpanded && <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" className="header__main-ham-menu" onClick={() => {setOptionsExpanded(true)}}/>}
                        {optionsExpanded && <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className="header__main-ham-menu" onClick={() => {setOptionsExpanded(false)}}/>}
                    </div>
                </div>
            </div>

            <div className={optionsExpanded ? "header__sm-menu--active" : "header__sm-menu"}>
            <div className="header__sm-menu-content">
                <ul className="header__sm-menu-links">
                    {links.map(element => 
                        <li className="header__sm-menu-link" key={element.name}>
                            <a href={element.href}> {element.name} </a>
                        </li>
                    )}
                </ul>
            </div>
            </div>
        </header>
    )
};
