import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, updateEmail, updateProfile } from "firebase/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";
import Referal from "../../components/referal/Referal";
import classes from "./Profile.module.scss";
import Gear from "../../components/icons/Gear";
import Wallet from "../../components/icons/Wallet";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserEmail, updateUserName } from "../../store/slices/userSlice";
import { v4 } from "uuid";

const Profile = () => {
    const [contentType, setContentType] = useState("info");

    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const urlParams = useParams();

    const { name, email, subscriptions } = useSelector((state) => state.user);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user || urlParams.id !== user.uid) {
                return navigate("/");
            }
            userName.setValue(name || "");
            userEmail.setValue(email || "");
        });
    }, [auth.currentUser]);

    const userName = useInput("", { isEmpty: true, minLength: 1 });
    const userEmail = useInput("", { isEmpty: true, email: true });

    const updateUser = async (e) => {
        e.preventDefault();

        await updateProfile(auth.currentUser, {
            displayName: userName.value,
        })
            .then(() => {
                dispatch(updateUserName({ name: userName.value }));
            })
            .catch((error) => {
                console.log(error.code);
            });

        await updateEmail(auth.currentUser, userEmail.value)
            .then(() => {
                dispatch(updateUserEmail({ email: userEmail.value }));
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return (
        <div className={classes.profile}>
            <div className="container">
                <div className={classes.body}>
                    <div className={classes.heading}>
                        <h1 className={classes.heading__title}>Personal data management</h1>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.content__main}>
                            <div className={classes.main__sidebar}>
                                <ul className={classes.sidebar__list}>
                                    <li onClick={() => setContentType("info")} className={contentType === "info" ? classes.li_active : classes.li}>
                                        <Gear className={classes.icon} /> Account info
                                    </li>
                                    <li
                                        onClick={() => setContentType("subscriptions")}
                                        className={contentType === "subscriptions" ? classes.li_active : classes.li}>
                                        <Wallet className={classes.icon} /> My Subscriptions
                                    </li>
                                </ul>
                            </div>
                            {contentType === "info" ? (
                                <div className={classes.main__accountInfo}>
                                    <div className={classes.accountInfo__heading}>
                                        <h2 className={classes.accountInfo__title}>Account info</h2>
                                    </div>
                                    <div className={classes.accountInfo__body}>
                                        <form className={classes.accountInfo__form}>
                                            <div className={classes.inputBlock}>
                                                <h3 className={classes.inputBlock__title}>How can I call you?</h3>
                                                <div className={classes.inputBlock__input}>
                                                    <Input
                                                        value={userName.value}
                                                        onChange={(e) => userName.onChange(e)}
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <p className={classes.inputBlock__error}></p>
                                            </div>
                                            <div className={classes.inputBlock}>
                                                <h3 className={classes.inputBlock__title}>E-mail</h3>
                                                <div className={classes.inputBlock__input}>
                                                    <Input
                                                        value={userEmail.value}
                                                        onChange={(e) => userEmail.onChange(e)}
                                                        placeholder="Enter your e-mail"
                                                    />
                                                </div>
                                                <p className={classes.inputBlock__error}></p>
                                            </div>
                                            <div className={classes.button}>
                                                <Button onClick={updateUser} disabled={!userName.inputValid || !userEmail.inputValid} color={"blue"}>
                                                    Save changes
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : Object.keys(subscriptions).length ? (
                                <div className={classes.main__subscriptions}>
                                    {Object.entries(subscriptions).map((item) => {
                                        return (
                                            <div
                                                key={v4()}
                                                className={
                                                    classes.subscription +
                                                    " " +
                                                    `${
                                                        item[0] === "youtube"
                                                            ? classes.youtube
                                                            : item[0] === "netflix"
                                                            ? classes.netflix
                                                            : classes.spotify
                                                    }`
                                                }>
                                                <div className={classes.subscription__heading}>
                                                    <h2 className={classes.subscription__title}>
                                                        {item[0].split("").splice(0, 1).join("").toUpperCase() +
                                                            item[0].split("").splice(1).join("") +
                                                            " " +
                                                            item[1].title}
                                                    </h2>
                                                </div>
                                                <div className={classes.subscription__content}>
                                                    <div className={classes.subscription__info}>
                                                        {item[1].list.map((text) => (
                                                            <p key={v4()}>{text}</p>
                                                        ))}
                                                    </div>
                                                    <div className={classes.subscription__actions}>
                                                        <Link
                                                            className={classes.subscription__link}
                                                            to={
                                                                item[0] === "youtube"
                                                                    ? "/subscription/youtube"
                                                                    : item[0] === "netflix"
                                                                    ? "/subscription/netflix"
                                                                    : item[0] === "spotify"
                                                                    ? "/subscription/spotify"
                                                                    : null
                                                            }>
                                                            Change plan
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>
                        <div className={classes.content__referal}>
                            <Referal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
