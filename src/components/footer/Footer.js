import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import WhatsUp from "../icons/WhatsUp";
import Telegram from "../icons/Telegram";
import DropDown from "../dropDown/DropDown";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__body}>
                    <div className={classes.footer__menu + " " + classes.menu}>
                        <div className={classes.menu__column + " " + classes.menu__column_logoBlock}>
                            <div className={classes.logoBlock}>
                                <img className={classes.logo} src={require("../../img/logo-footer.png")} alt="" />
                                <p className={classes.logo__text}>DiscountsOnServices</p>
                            </div>
                            <p className={classes.menu__text}>It's simple, fast and economical</p>
                        </div>
                        <div className={classes.menu__column + " " + classes.menu__column_navigate}>
                            <h3 className={classes.menu__title}>Subscriptions</h3>
                            <ul className={classes.menu__list}>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        Netflix
                                    </Link>
                                </li>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        YouTube Premium
                                    </Link>
                                </li>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        Spotify
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.menu__column + " " + classes.menu__column_navigate}>
                            <h3 className={classes.menu__title}>Site navigation</h3>
                            <ul className={classes.menu__list}>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link className={classes.menu__link} to="/">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.menu__column + " " + classes.menu__column_contacts}>
                            <div className={classes.menu__contacts}>
                                <a href="*">
                                    <WhatsUp />
                                </a>
                                <a href="*">
                                    <Telegram />
                                </a>
                            </div>
                            <DropDown
                                options={[
                                    { title: "English", type: "link", action: null },
                                    { title: "Ukrainian", type: "link", action: null },
                                ]}
                                defaultValue={"EN"}
                                fill={"#fff"}
                            />
                        </div>
                    </div>
                    <div className={classes.footer__info}>
                        <p>Privacy Policy</p>
                        <p className={classes.copyright}>Copyright 2021 © All Rights Reserved</p>
                        <p>Developed by Arsen Makaruk</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
