import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import Accout from "../icons/Account";
import LogOut from "../icons/LogOut";
import Chevron from "../icons/Chevron";
import classes from "./DropDown.module.scss";
const DropDown = ({ options, defaultValue, fill, icon }) => {
    const [dropDownActive, setDropDownActive] = useState(false);

    return (
        <div onMouseEnter={() => setDropDownActive(true)} onMouseLeave={() => setDropDownActive(false)} className={classes.dropDown}>
            <div className={classes.heading}>
                {icon === "account" ? <Accout className={classes.icon__account} /> : null}
                <p className={classes.title}>{defaultValue[0].toUpperCase() + defaultValue.slice(1)}</p>
                <Chevron fill={fill} />
            </div>
            {dropDownActive && (
                <ul className={classes.dropDownList}>
                    {options.map((item) => {
                        return item.type === "link" ? (
                            <li key={v4()} className={classes.link}>
                                <NavLink className={classes.link} to={item.path}>
                                    {item.icon === "account" ? (
                                        <Accout className={classes.icon__account} />
                                    ) : item.icon === "logout" ? (
                                        <LogOut className={classes.icon__logOut} />
                                    ) : null}
                                    {item.title}
                                </NavLink>
                            </li>
                        ) : item.type === "modal" ? (
                            <li key={v4()} className={classes.link} onClick={item.action}>
                                {item.icon === "account" ? (
                                    <Accout className={classes.icon__account} />
                                ) : item.icon === "logout" ? (
                                    <LogOut className={classes.icon__logOut} />
                                ) : null}
                                {item.title}
                            </li>
                        ) : null;
                    })}
                </ul>
            )}
        </div>
    );
};

export default DropDown;
