import React from "react";
import '../HeroSection/Hero.css';
import Button from "../ComponentPublic/Button.jsx";

export default function Hero(props) {
    let data = props.data.heroSection.map(item => item)
    let [img, texts] = data
    let { textsHero, linksIcon, btns, projectHistory } = texts

    return (
        <section id="heroSection">
            <div className="container">
                <div>
                    <div className="top-texts">
                        {
                            textsHero.map(item => (<h1 className={item.class}>{item.child} </h1>))
                        }
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
                    <div className="btnsHero">
                        {
                            btns.map((item, index) =>
                            (
                                <Button props={
                                    {
                                        child: item.child,
                                        btnClass: item.class,
                                        btnKey: index,
                                        href: item.href,
                                        download: "download"
                                    }
                                } />
                            )
                            )
                        }
                    </div>
                    <div className="projectHistory">
                        {
                            projectHistory.map((item, index) =>
                            (
                                <div>
                                    <h3 key={index}>{item.num}</h3>
                                    <span key={index}>{item.child}</span>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
                <div className="photoMe">
                    <div className="bg-ph-hero"></div>
                    <img className="myImage" src={img.src} />
                </div>
            </div>
        </section >
    )

}