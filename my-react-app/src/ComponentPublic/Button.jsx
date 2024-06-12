import React from "react";

function checkAnchor(info) {
    let x = false
    for (const i in info) {
        if (i == "href") {
            x = true
        }
    }
    return x
}

export default function Button(props) {
    let info = props.props

    if (checkAnchor(info)) {
        return (
            <>
                <a className={info.aClass} download href={info.href}>
                    <button key={info.btnKey} className={info.btnClass}>
                        {info.child}
                    </button>
                </a>
            </>
        )
    } else {
        return (
            <>
                <button key={info.btnKey} className={info.btnClass}>
                    {info.child}
                </button>
            </>
        )
    }
}

//<Button props={
//    {
//        child: "",
//        btnClass: "",
//        btnKey: "",
//        href: "",
//        aClass: "",
//    }
//} />