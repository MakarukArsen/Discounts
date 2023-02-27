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
import Modal from "../modals/Modal";
import AuthModal from "../modals/auth/AuthModal";
import LogOutModal from "../modals/logOuthModal/LogOutModal";
import { useSelector } from "react-redux";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [logOutModalOpen, setLogOutModalOpen] = useState(false);

    const { name, id } = useSelector((state) => state.user);

    return (
        <header className={classes.header}>
            <Modal modalOpen={authModalOpen} onClose={() => setAuthModalOpen(false)}>
                <AuthModal onClose={() => setAuthModalOpen(false)} />
            </Modal>
            <Modal modalOpen={logOutModalOpen} onClose={() => setLogOutModalOpen(false)}>
                <LogOutModal onClose={() => setLogOutModalOpen(false)} />
            </Modal>
            <div className={classes.header__body}>
                <div className="container">
                    <div className={classes.desctop}>
                        <Link to="/" className={classes.logoBlock}>
                            <img className={classes.logo} src={require(`../../img/logo.png`)} alt="logo" />
                            <p className={classes.logoText}>DiscountsOnServices</p>
                        </Link>
                        <ul className={classes.menu}>
                            <li>
                                <DropDown
                                    options={[
                                        { title: "Netflix", type: "link", path: "subscription/netflix", action: null },
                                        { title: "Youtube", type: "link", path: "subscription/youtube", action: null },
                                        { title: "Spotify", type: "link", path: "subscription/spotify", action: null },
                                    ]}
                                    defaultValue={"Subscription"}
                                    fill={"#171717"}
                                />
                            </li>
                            <li>
                                <NavLink className={classes.link} to="faq">
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
                                <Link>
                                    <WhatsUp className={classes.icon} />
                                </Link>
                                <Link>
                                    <Telegram className={classes.icon} />
                                </Link>
                            </div>

                            <DropDown
                                options={[
                                    { title: "English", type: "link", action: null },
                                    { title: "Ukrainian", type: "link", action: null },
                                ]}
                                defaultValue={"EN"}
                                fill={"#171717"}
                            />

                            {name ? (
                                <div className={classes.account}>
                                    <DropDown
                                        icon={"account"}
                                        options={[
                                            {
                                                title: "My profile",
                                                type: "link",
                                                action: "navigate",
                                                path: `profile/${id}`,
                                                icon: "account",
                                            },
                                            { title: "Logout", type: "modal", action: () => setLogOutModalOpen(true), icon: "logout" },
                                        ]}
                                        defaultValue={name}
                                        fill={"#171717"}
                                    />
                                </div>
                            ) : (
                                <div className={classes.button}>
                                    <Button onClick={() => setAuthModalOpen(true)} color={"blue"} className={classes.logIn}>
                                        Log in
                                    </Button>
                                </div>
                            )}
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
