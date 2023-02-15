import React from "react";
import classes from "./FaqPage.module.scss";
import Faq from "../../components/faq/Faq";
import { faqData } from "../../constants";
const FaqPage = () => {
    return (
        <div className={classes.faq}>
            <div className="container">
                <div className={classes.faq__body}>
                    <Faq title={"How can we help you?"} faqData={faqData.full} />
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
