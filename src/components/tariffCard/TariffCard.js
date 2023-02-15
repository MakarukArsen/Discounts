import React from "react";
import Check from "../icons/Check";
import Button from "../UI/button/Button";
import classes from "./TariffCard.module.scss";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
const TariffCard = ({ tariff }) => {
    const tariffDuration = useSelector((state) => state.tariff.tariffDuration);
    return (
        <div className={classes.tariffCard}>
            <h3 className={classes.tariffCard__title}>{tariff.title}</h3>
            <ul className={classes.tariffCard__list}>
                {tariff.list.map((item) => {
                    return (
                        <li key={v4()}>
                            <Check /> {item}
                        </li>
                    );
                })}
            </ul>
            <div className={classes.tariffCard__price}>
                <p className={classes.price}>
                    <span>$</span> {tariffDuration === "6" ? tariff.sixMonthPrice : tariff.twelveMonthPrice}
                </p>
                <div className={classes.button}>
                    <Button color="blue">Get started</Button>
                </div>
            </div>
        </div>
    );
};

export default TariffCard;
