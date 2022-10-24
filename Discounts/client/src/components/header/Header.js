import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import WhatsUp from "../icons/WhatsUp";
import Telegram from "../icons/Telegram";
import Button from "../UI/button/Button";
import DropDown from "../dropDown/DropDown";
import Home from "../icons/Home";
import About from "../icons/About";
import Faq from "../icons/Faq";
import Support from "../icons/Support";
import Select from "../UI/select/Select";
const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className={classes.header}>
            <div className={classes.header__body}>
                <div className="container">
                    <div className={classes.desctop}>
                        <Link to="/" className={classes.logoBlock}>
                            <img className={classes.logo} src={require(`../../img/logo.png`)} alt="logo" />
                            <p className={classes.logoText}>DiscountsOnServices</p>
                        </Link>
                        <ul className={classes.menu}>
                            <li>
                                <DropDown links={["Netflix", "YouTube Premium", "Spotify"]} title={"Subscription"} fill={"#171717"} />
                            </li>
                            <li>
                                <NavLink className={classes.link} to="/">
                                    FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.link} to="/">
                                    Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.link} to="/">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <div className={classes.actions}>
                            <div className={classes.contactUs}>
                                <a href="*">
                                    <WhatsUp className={classes.icon} />
                                </a>
                                <a href="*">
                                    <Telegram className={classes.icon} />
                                </a>
                            </div>

                            <DropDown links={["English", "Ukraine"]} title={"EN"} fill={"#171717"} />

                            <div className={classes.button}>
                                <Button color={"blue"} className={classes.logIn}>
                                    Log in
                                </Button>
                            </div>
                        </div>
                        <div
                            onClick={() => setMenuActive(!menuActive)}
                            className={`${classes.menu__button} ${menuActive && classes.menu__button_active}`}>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* mobile version */}

                <div className={`${classes.mobile} ${menuActive && classes.mobile_active}`}>
                    <div className={classes.mobile__content}>
                        <div className={classes.mobile__menu}>
                            <ul className={classes.mobile__list}>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        <Home />
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        <About />
                                        FAQ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        <Faq />
                                        Support
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        <Support />
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className={classes.mobile__list}>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        Netflix
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        YouTube
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={classes.link} to="/">
                                        Spotify
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.mobile__actions}>
                            <div className={classes.mobile__authButtons}>
                                <div className={classes.button}>
                                    <Button color={"white"}>Log in</Button>
                                </div>
                                <div className={classes.button}>
                                    <Button color={"blue"}>Sign up</Button>
                                </div>
                            </div>
                            <div className={classes.mobile__contact}>
                                <div className={classes.icons}>
                                    <a href="*">
                                        <WhatsUp className={classes.icon} />
                                    </a>
                                    <a href="*">
                                        <Telegram className={classes.icon} />
                                    </a>
                                </div>
                                <div className={classes.select}>
                                    <Select selected={"EN"} options={["English", "Українська"]} fill="#171717" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
