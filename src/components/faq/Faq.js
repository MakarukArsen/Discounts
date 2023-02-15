import React from "react";
import { v4 } from "uuid";
import Spoiler from "../spoiler/Spoiler";
import Button from "../UI/button/Button";
import classes from "./Faq.module.scss";
const Faq = ({ title, faqData }) => {
    return (
        <div className={classes.faq}>
            <h2 className={classes.faq__title}>{title}</h2>
            <div className={classes.faq__spoilers}>
                {faqData.map((spoilerData) => {
                    return <Spoiler title={spoilerData.title} text={spoilerData.text} key={v4()} />;
                })}
            </div>
            <div className={classes.button}>
                <Button color={"black"}>Support</Button>
            </div>
        </div>
    );
};

export default Faq;
