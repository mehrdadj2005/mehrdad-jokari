import React from "react";
import "./AboutMe.css"

export default function AboutMe(props) {
    let data = props.data.AboutMe
    let [texts, main] = data
    let [img, textAndBtns, skills] = main

    return (
        <div className="AboutMeSection">
            <div className="container-aboutMe">
                <div className="texts-Head-AboutMe">
                    <h1>{texts.title}</h1>
                    <p>{texts.description}</p>
                </div>
                <div className="main-AboutMe">
                    <div className="photoAbout">
                        <div className="bg-ph-about">
                        </div>
                        <img className="meImage2" src={img.src} />
                    </div>

                    <div className="textsAndBtn">
                        <p>{textAndBtns.textAboutMe}</p>
                        <div>
                            {
                                textAndBtns.btns.map((item, index) => (
                                    <a key={index} download href={item.href}>
                                        <button className={item.class}>
                                            <img src={item.srcIcon} />
                                            {item.textBtn}
                                        </button>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="scroller">
                    <div className="skills">
                        {
                            skills.map((item, index) => (
                                <>
                                    <div className="skill" key={index} >
                                        <div>
                                            <img src={item.srcIcon} />
                                        </div>
                                        <span>{item.Percent}</span>
                                        <h4>{item.skillName}</h4>
                                    </div>
                                </>
                            ))
                        }
                        {
                            skills.map((item, index) => (
                                <>
                                    <div className="skill" key={index} >
                                        <div>
                                            <img src={item.srcIcon} />
                                        </div>
                                        <span>{item.Percent}</span>
                                        <h4>{item.skillName}</h4>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        addAnimation()
    }, 1000);
})

function addAnimation() {
    document.querySelectorAll(".scroller").forEach(scroller => {
        scroller.setAttribute("data-animated", true)
    });
}
