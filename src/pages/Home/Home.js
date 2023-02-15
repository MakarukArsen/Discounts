import React from "react";
import Faq from "../../components/faq/Faq";
import Referal from "../../components/referal/Referal";
import { faqData } from "../../constants";
import Button from "../../components/UI/button/Button";
import classes from "./Home.module.scss";

const Home = () => {
    return (
        <div className={classes.home}>
            <div className="container">
                <div className={classes.home__body}>
                    <div className={classes.start}>
                        <div className={classes.start__box + " " + classes.start__box_blue}>
                            <div className={classes.start__blueBox}>
                                <h1 className={classes.start__title}>Start enjoying a benefit of up to 50%</h1>
                                <p className={classes.start__text}>
                                    You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
                                </p>
                                <div className={classes.button}>
                                    <Button color={"white"}>Start using</Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.start__box + " " + classes.start__box_white}>
                            <div className={classes.start__whiteBox}>
                                <img src={require("../../img/start.png")} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.subscription}>
                        <h2 className={classes.subscription__title}>Choose a subscription</h2>
                        <div className={classes.subscription__content}>
                            <div className={classes.subscription__application + " " + classes.application}>
                                <div className={classes.application__textBlock}>
                                    <h3 className={classes.application__title}>Netflix subscription rates</h3>
                                    <p className={classes.application__text}>
                                        The constant contributes to the task of the same and thus the intended features and the set relation to the
                                        check and set also.
                                    </p>
                                    <div className={classes.application__button}>
                                        <Button color={"blue"}>Learn more</Button>
                                    </div>
                                </div>
                                <div className={classes.application__imageBlock}>
                                    <img src={require("../../img/netflix.png")} alt="" />
                                </div>
                            </div>
                            <div className={classes.subscription__application + " " + classes.application}>
                                <div className={classes.application__textBlock}>
                                    <h3 className={classes.application__title}>Spotify Premium</h3>
                                    <p className={classes.application__text}>
                                        The constant contributes to the task of the same and thus the intended features and the set relation to the
                                        check and set also.
                                    </p>
                                    <div className={classes.application__button}>
                                        <Button color={"blue"}>Learn more</Button>
                                    </div>
                                </div>
                                <div className={classes.application__imageBlock}>
                                    <img src={require("../../img/spotify.png")} alt="" />
                                </div>
                            </div>
                            <div className={classes.subscription__application + " " + classes.application}>
                                <div className={classes.application__textBlock}>
                                    <h3 className={classes.application__title}>YouTube Premium </h3>
                                    <p className={classes.application__text}>
                                        The constant contributes to the task of the same and thus the intended features and the set relation to the
                                        check and set also.
                                    </p>
                                    <div className={classes.application__button}>
                                        <Button color={"blue"}>Learn more</Button>
                                    </div>
                                </div>
                                <div className={classes.application__imageBlock}>
                                    <img src={require("../../img/youtube.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.cards}>
                        <h2 className={classes.cards__title}>How it works?</h2>
                        <div className={classes.cards__content}>
                            <div className={classes.cards__item}>
                                <div className={classes.cardsItem__image}>
                                    <img className={classes.cardsItem__image} src={require("../../img/bell.png")} alt="bell" />
                                </div>
                                <h3 className={classes.cardsItem__title}>Step 1</h3>
                                <p className={classes.cardsItem__text}>Enter your account information</p>
                            </div>
                            <div className={classes.cards__item}>
                                <div className={classes.cardsItem__image}>
                                    <img className={classes.cardsItem__image} src={require("../../img/plan.png")} alt="plan" />
                                </div>
                                <h3 className={classes.cardsItem__title}>Step 2</h3>
                                <p className={classes.cardsItem__text}>Select the desired subscription and plan</p>
                            </div>
                            <div className={classes.cards__item}>
                                <div className={classes.cardsItem__image}>
                                    <img className={classes.cardsItem__image} src={require("../../img/confeti.png")} alt="confeti" />
                                </div>
                                <h3 className={classes.cardsItem__title}>Step 3</h3>
                                <p className={classes.cardsItem__text}>Pay your bill with PayPal</p>
                            </div>
                        </div>
                        <Referal />
                    </div>
                    <div className={classes.aboutUs}>
                        <h2 className={classes.aboutUs__title}>About us</h2>
                        <div className={classes.aboutUs__content}>
                            <div className={classes.aboutUs__box + " " + classes.aboutUs__box_text}>
                                <div className={classes.aboutUs__textBlock}>
                                    <img className={classes.aboutUs__logo} src={require("../../img/logo.png")} alt="" />
                                    <p className={classes.aboutUs__text}>We offer you a subscription to various media services at the best price.</p>
                                    <p className={classes.aboutUs__text}>
                                        We have partnered with several companies to help you find the best prices for your media subscriptions and
                                        provide you with the best prices for the Premium subscriptions you want.
                                    </p>
                                    <p className={classes.aboutUs__text}>It's simple, fast and economical.</p>
                                </div>
                            </div>
                            <div className={classes.aboutUs__box + " " + classes.aboutUs__box_image}>
                                <div className={classes.aboutUs__imageBlock}>
                                    <img src={require("../../img/aboutUs.png")} alt="aboutus" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Faq title={"FAQ"} faqData={faqData.short} />
                    <div className={classes.request}>
                        <div className={classes.request__textblock}>
                            <h3 className={classes.request__title}>Request for an additional subscription that was not found here</h3>
                            <p className={classes.request__text}>Disney, Amazon Prime, Microsoft Office, Microsoft Windows</p>
                        </div>
                        <div className={classes.request__button}>
                            <Button color={"white"}>Request</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
