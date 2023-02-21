import React from "react";
import Check from "../icons/Check";
import Button from "../UI/button/Button";
import classes from "./TariffCard.module.scss";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { updateUserSubscription } from "../../store/slices/userSlice";
import { useParams } from "react-router-dom";

const TariffCard = ({ tariff, openModal }) => {
    const tariffDuration = useSelector((state) => state.tariff.tariffDuration);
    const id = useSelector((state) => state.user.id);
    const params = useParams().id;
    const dispatch = useDispatch();
    const updateTariff = async () => {
        const userRef = doc(db, "users", id);
        const userDoc = await getDoc(userRef).then((res) => res.data());
        const updatedSubscriptions = {
            subscriptions: {
                youtube:
                    params === "youtube"
                        ? {
                              title: tariff.title,
                              list: tariff.list,
                              duration: tariffDuration,
                          }
                        : userDoc.subscriptions.youtube,
                netflix: params === "netflix" ? { title: tariff.title, list: tariff.list, duration: tariffDuration } : userDoc.subscriptions.netflix,
                spotify: params === "spotify" ? { title: tariff.title, list: tariff.list, duration: tariffDuration } : userDoc.subscriptions.spotify,
            },
        };
        await updateDoc(userRef, updatedSubscriptions).then(() => dispatch(updateUserSubscription(updatedSubscriptions)));
    };

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
                    <Button
                        onClick={() => {
                            updateTariff();
                            openModal(true);
                        }}
                        color="blue">
                        Get started
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TariffCard;
