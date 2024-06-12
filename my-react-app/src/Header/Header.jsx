import React from "react";
import '../Header/Header.css';
import Button from "../ComponentPublic/Button.jsx";


let body = document.querySelector('body')

function Header(props) {
    let [src, logo, nav, btn] = props.data.header

    let infoNav = nav.child.map(item => item.child)

    return (
        <header>
            <div className="container">
                <img src={src.src} className="menuIcon" onClick={showSidebar} />
                <h1 className="logo" onClick={goToSection}>{logo.child}</h1>
                <ul className="liContainer">
                    {
                        infoNav.map((item, index) => (
                            <>
                                <li className="li" onClick={goToSection} key={index}>
                                    {item}
                                </li >
                            </>
                        ))
                    }
                </ul>
                {
                    btn.map((item, index) => (
                        <Button props={
                            {
                                child: item.child,
                                btnClass: item.class,
                                btnKey: index,
                            }
                        } />
                    ))
                }
            </div>
            <div className="bac-sidebar" onClick={hiddenSidebar}>
                <div className="container-sidebar">
                    <ul>
                        {
                            infoNav.map((item, index) => (
                                <li className="li" onClick={goToSection} key={index}>
                                    {item}
                                </li >
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

function showSidebar() {
    document.querySelector('.bac-sidebar').style.display = "flex"
}

function hiddenSidebar() {
    document.querySelector('.bac-sidebar').style.display = "none"
}

setTimeout(() => {

    // document.querySelector(".HireMeHeader").addEventListener("click", goToSection)
    // document.querySelector(".HireMeHero").addEventListener("click", goToSection)
}, 1000);


function goToSection(e) {
    let Services = document.querySelector('.servicesSection')
    let AboutMe = document.querySelector('.AboutMeSection')
    let Portfolio = document.querySelector('.portfolioSection')
    let ContactMe = document.querySelector('.ContactMeSection')
    hiddenSidebar()
    let info = e.target.textContent

    if (info == 'Home' || info == "MeHrDaD jOkArI") {
        body.scrollIntoView({ behavior: 'smooth' })
    } else if (info == 'Services') {
        Services.scrollIntoView({ behavior: 'smooth' })
    } else if (info == 'About me') {
        AboutMe.scrollIntoView({ behavior: 'smooth' })
    } else if (info == 'Portfolio') {
        Portfolio.scrollIntoView({ behavior: 'smooth' })
    } else if (info == 'Contact me' || info == "Hire Me") {
        ContactMe.scrollIntoView({ behavior: 'smooth' })
    }
}

export { Header, goToSection }