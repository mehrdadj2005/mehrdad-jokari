import React from "react";
import './Effects.css'

export default function Effects() {
    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </>
    )
}

document.addEventListener("mousemove", Mousemove)

function Mousemove(e) {
    let cursorDot = document.querySelector(".cursor-dot")
    let cursorOutline = document.querySelector(".cursor-outline")

    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate(
            {
                left: `${posX}px`,
                top: `${posY}px`
            },
            {
                duration: 500,
                iterations: 1,
            }
        );
    }
}