import React, { useRef, useState } from "react";
import classes from "./Spoiler.module.scss";
import { v4 } from "uuid";
import Chevron from "../icons/Chevron";
const Spoiler = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);
    const [contentHeight, setContentHeight] = useState("0px");
    const spoilerHeight = useRef(null);

    const handleClick = () => {
        setIsActive(!isActive);
        setContentHeight(contentHeight === "0px" ? spoilerHeight.current.scrollHeight : "0px");
    };

    return (
        <div className={classes.spoiler} onClick={handleClick}>
            <div className={classes.heading}>
                <h3 className={classes.title}>{title}</h3>
                <Chevron className={`${classes.icon} ${isActive && classes.icon_active}`} />
            </div>
            <div style={{ maxHeight: contentHeight }} ref={spoilerHeight} className={isActive ? classes.content_active : classes.content}>
                <p key={v4()} className={classes.text}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Spoiler;
