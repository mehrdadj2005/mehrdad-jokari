import React from "react";
import "./ContactMe.css"
import Button from "../ComponentPublic/Button";


export default function (props) {

    let [texts, inputsText, btns] = props.data.ContactMe

    return (
        <div className="ContactMeSection">
            <div className="container-ContactMe">
                <div className="texts-ContactMe">
                    <h1>{texts.title}</h1>
                    <p>{texts.description}</p>
                </div>
                <form id="form">
                    <div className="inputsContactMe">
                        {
                            inputsText.map((item, index) => (
                                <input type="text" id={item.id} key={index} placeholder={item.child} />
                            ))
                        }
                        <textarea className="inputDesc" id="description" placeholder="Description"></textarea>
                    </div>
                    <div className="btnsContactMe">
                        {
                            btns.map((item, index) => (
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
                </form>
            </div>
        </div>
    )
}