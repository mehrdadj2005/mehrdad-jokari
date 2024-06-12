import React from "react";
import './Services.css'

export default function Services(props) {
    let [texts, catds] = props.data.Services

    return (
        <div className="servicesSection">
            <div className="container-services">
                <div className="texts-services">
                    <h1 className="titServices">{texts.title}</h1>
                    <p className="descServices" key={texts.description}>{texts.description}</p>
                </div>
                <div className="cards-services">
                    {
                        catds.map(item => (
                            <div>
                                <a href={item.href}>
                                    <img src={item.srcLink} />
                                    <h3>{item.titCard}</h3>
                                    <p>{item.description}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )

}