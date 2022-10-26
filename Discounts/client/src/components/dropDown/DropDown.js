import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Chevron from "../icons/Chevron";
import classes from "./DropDown.module.scss";
const DropDown = ({ links, title, fill }) => {
    const [dropDownActive, setDropDownActive] = useState(false);

    return (
        <div onMouseEnter={() => setDropDownActive(true)} onMouseLeave={() => setDropDownActive(false)} className={classes.dropDown}>
            <div className={classes.heading}>
                <p className={classes.title}>{title[0].toUpperCase() + title.slice(1)}</p>
                <Chevron fill={fill} />
            </div>
            {dropDownActive && (
                <div className={classes.dropDownList}>
                    {links.map((item) => (
                        <NavLink className={classes.link} to={`subscription/${item}`}>
                            {item[0].toUpperCase() + item.slice(1)}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
