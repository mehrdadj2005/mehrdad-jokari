import React from "react";
import "./Footer.css";
import { goToSection } from "../Header/Header";

export default function Footer(props) {
    let [logo, nav, linksIcon, callMe, text] = props.data.Footer


    return (
        <footer>
            <div className="container-Footer">

                <div>
                    <h1 className="logo-footer" onClick={goToSection}>{logo.child}</h1>
                </div>

                <div className="nav">
                    <ul>
                        {
                            nav.map((item, index) => (
                                <li onClick={goToSection} className="li" key={index}>
                                    {item.child}
                                </li >
                            ))
                        }
                    </ul>
                </div>

                <div className="linksIcon">
                    {
                        linksIcon.map(item =>
                        (
                            <a target="_blank" className={item.class} href={item.href}>
                                <img src={item.src} />
                            </a>
                        )
                        )
                    }
                </div>

                <div className="callMe">
                    {
                        callMe.map((item, index) => (

                            <>
                                <div>
                                    <img src={item.src} />
                                    <p>{item.child}</p>
                                </div>
                            </>
                        ))
                    }
                </div>

                <div className="hr"></div>

                <div className="texxtFooter">
                    <p>{text.child}</p>
                </div>
            </div>
        </footer>
    )
}