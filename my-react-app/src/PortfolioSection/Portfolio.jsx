import React from "react";
import "./Portfolio.css"
import Button from "../ComponentPublic/Button";

export default function Portfolio(props) {
    let [texts, cards, btn] = props.data.Portfolio
    let [title, btns] = texts
    return (
        <div className="portfolioSection" id="Portfolio">
            <div className="container-portfolio">
                <div className="head-portfolio">
                    <h1>{title.child}</h1>
                    <div className="btnsPortfolio">
                        {
                            btns.map((item, index) => (
                                <button key={index} className={item.class}>
                                    {item.child}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="cards">
                    {
                        cards.map((item, index) => (
                            <>
                                <div key={index}>
                                    <a target="_blank" href={item.href}>
                                        <div className={`imgDiv img${index}`} style={{ backgroundImage: `url(${item.src})` }}></div>
                                        <div className="textDiv">
                                            <h3 className="nameProject">{item.nameProject}</h3>
                                            <h3 className="categories">{item.categories}</h3>
                                        </div>
                                    </a>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="btnShowMore">
                </div>
            </div >
        </div >
    )
}