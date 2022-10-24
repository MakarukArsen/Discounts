import React from "react";
import Link from "../icons/Link";
import classes from "./Referal.module.scss";

const Referal = () => {
    return (
        <div className={classes.referal}>
            <div className={classes.textBlock}>
                <h3 className={classes.title}>Invite friends</h3>
                <p className={classes.text}>Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL</p>
            </div>
            <div className={classes.actionBlock}>
                <p className={classes.subtitle}>Click on the link</p>
                <a href="*" className={classes.link}>
                    Discounts On Services
                    <Link className={classes.link__svg} />
                </a>
            </div>
        </div>
    );
};

export default Referal;
