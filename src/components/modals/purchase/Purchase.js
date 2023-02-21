import React from "react";
import Button from "../../UI/button/Button";
import classes from "./Purchase.module.scss";
const Purchase = ({ onClose }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modal__heading}>
                <h1 className={classes.heading__title}>Subscription paid</h1>
            </div>
            <div className={classes.modal__content}>
                <p>You can check and change your subscription plan in your profile</p>
                <div className={classes.button}>
                    <Button color={"blue"} onClick={() => onClose()}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
