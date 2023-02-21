import React, { useState } from "react";
import Button from "../../UI/button/Button";
import classes from "./AuthModal.module.scss";
import Input from "../../UI/input/Input";
import useInput from "../../../hooks/useInput";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase";

const AuthModal = ({ onClose }) => {
    const [modalType, setModalType] = useState("login");
    const [authError, setAuthError] = useState("");

    const name = useInput("", { isEmpty: true, minLength: 1 });
    const email = useInput("", { isEmpty: true, email: true });
    const password = useInput("", { isEmpty: true, minLength: 6 });
    const [agreePolitic, setAgreePolitic] = useState(false);

    const dispatch = useDispatch();
    const auth = getAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email.value, password.value)
            .then(async () => {
                if (auth.currentUser && auth.currentUser.emailVerified) {
                    return onClose();
                }
                setAuthError("Підтвердіть верифікацію через ваш email");
                setModalType("verification");
                await sendEmailVerification(auth.currentUser, {
                    url: "http://localhost:3000/",
                });
            })
            .catch((error) => {
                console.log(error.code);
                if (error.code === "auth/user-not-found") {
                    return setAuthError("Такого користувача не знайдено");
                }
                if (error.code === "auth/wrong-password") {
                    return setAuthError("Невірно вказаний пароль");
                }
                if (error.code === "auth/too-many-requests") {
                    return setAuthError("Занадто багато спроб, спробуйте пізінше");
                }
            });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(async () => {
                setModalType("verification");
                await sendEmailVerification(auth.currentUser, {
                    url: "http://localhost:3000/",
                });
                await updateProfile(auth.currentUser, {
                    displayName: name.value,
                });
                await setDoc(doc(db, "users", auth.currentUser.uid), {
                    name: name.value,
                    email: email.value,
                    subscriptions: {
                        youtube: null,
                        netflix: null,
                        spotify: null,
                    },
                });
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setAuthError("Данний email вже використовується");
                }
                if (error.code === "auth/too-many-requests") {
                    return setAuthError("Занадто багато спроб, спробуйте пізінше");
                }
            });
    };
    const resetPassword = async (e) => {
        e.preventDefault();
        setModalType("forgotPassSend");
        await sendPasswordResetEmail(auth, email.value)
            .then()
            .catch((error) => {
                console.log(error.code);
            });
    };
    return (
        <>
            {modalType === "login" ? (
                // Login
                <div className={classes.modal}>
                    <div className={classes.heading}>
                        <div className={classes.heading__row}>
                            <h1 className={classes.heading__title}>Log in</h1>
                        </div>
                        <p className={classes.heading__text}>
                            New user?
                            <span onClick={() => setModalType("register")}>Create an account</span>
                        </p>
                    </div>
                    <form className={classes.form}>
                        <div className={classes.form__inputBlock}>
                            <p className={classes.form__text}>Email Address</p>
                            <Input
                                value={email.value}
                                onChange={(e) => {
                                    email.onChange(e);
                                    setAuthError("");
                                }}
                                className={classes.form__input}
                                onBlur={() => email.onBlur()}
                                placeholder="Enter your e-mail"
                            />
                            <p className={classes.error}>
                                {email.isDirty && email.isEmpty
                                    ? "Поле не може бути пустим"
                                    : email.isDirty && email.emailError
                                    ? "Невірно вказаний email"
                                    : null}
                            </p>
                        </div>
                        <div className={classes.form__inputBlock}>
                            <p className={classes.input__text}>Password</p>
                            <Input
                                value={password.value}
                                onChange={(e) => {
                                    password.onChange(e);
                                    setAuthError("");
                                }}
                                onBlur={() => password.onBlur()}
                                className={classes.form__input}
                                placeholder="******"
                            />
                            <p className={classes.error}>
                                {password.isDirty && password.isEmpty
                                    ? "Поле не може бути пустим"
                                    : password.isDirty && password.minLengthError
                                    ? "Мінімальна кількість символів 6"
                                    : authError.length
                                    ? authError
                                    : null}
                            </p>
                        </div>
                        <div className={classes.form__actions}>
                            <p onClick={() => setModalType("forgotPass")} className={classes.form__forgotPass}>
                                Forfot password?
                            </p>
                            <div className={classes.form__button}>
                                <Button disabled={!email.inputValid || !password.inputValid} onClick={handleLogin} color="blue">
                                    Log in
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className={classes.loginWith}>
                        <p className={classes.loginWith__text}>Or sign in with</p>
                        <div className={classes.loginWith__content}>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/google.jpg")} alt="google" />
                            </div>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/facebook.jpg")} alt="facebook" />
                            </div>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/apple.jpg")} alt="apple" />
                            </div>
                        </div>
                    </div>
                    <p className={classes.footer}>
                        Protected by reCAPTCHA and subject to the Google <span>Privacy Policy</span> and <span>Terms of Service</span>.
                    </p>
                </div>
            ) : modalType === "register" ? (
                // Register
                <div className={classes.modal}>
                    <div className={classes.heading}>
                        <div className={classes.heading__row}>
                            <h1 className={classes.heading__title}>Create an account</h1>
                        </div>
                        <p className={classes.heading__text}>
                            Already have an account? <span onClick={() => setModalType("login")}>Sign In</span>
                        </p>
                    </div>
                    <form className={classes.form}>
                        <div className={classes.form__inputBlock}>
                            <p className={classes.form__text}>User names</p>
                            <Input
                                value={name.value}
                                onChange={(e) => {
                                    name.onChange(e);
                                    setAuthError("");
                                }}
                                onBlur={() => name.onBlur()}
                                className={classes.form__input}
                                placeholder="Enter your name"
                            />
                            <p className={classes.error}>{name.isDirty && name.isEmpty ? "Поле не може бути пустим" : null}</p>
                        </div>
                        <div className={classes.form__inputBlock}>
                            <p className={classes.form__text}>Email Address</p>
                            <Input
                                value={email.value}
                                onChange={(e) => {
                                    email.onChange(e);
                                    setAuthError("");
                                }}
                                onBlur={() => email.onBlur()}
                                className={classes.form__input}
                                placeholder="Enter your e-mail"
                            />
                            <p className={classes.error}>
                                {email.isDirty && email.isEmpty
                                    ? "Поле не може бути пустим"
                                    : email.isDirty && email.emailError
                                    ? "Невірно вказаний email"
                                    : null}
                            </p>
                        </div>
                        <div className={classes.form__inputBlock}>
                            <p className={classes.input__text}>Password</p>
                            <Input
                                value={password.value}
                                onChange={(e) => {
                                    password.onChange(e);
                                    setAuthError("");
                                }}
                                onBlur={() => password.onBlur()}
                                className={classes.form__input}
                                placeholder="******"
                            />
                            <p className={classes.error}>
                                {" "}
                                {password.isDirty && password.isEmpty
                                    ? "Поле не може бути пустим"
                                    : password.isDirty && password.minLengthError
                                    ? "Мінімальна кількість символів 6"
                                    : authError.length
                                    ? authError
                                    : null}
                            </p>
                        </div>
                        <div className={classes.form__inputBlock}>
                            <label className={classes.label}>
                                <input onChange={() => setAgreePolitic(!agreePolitic)} className={classes.checkbox} type="checkbox" />
                                <p>
                                    By creating an account you agree to our <span>Privacy Policy</span> and <span>Terms of Service</span>.
                                </p>
                            </label>
                        </div>
                        <div className={classes.form__actions}>
                            <div className={classes.form__button}>
                                <Button
                                    disabled={!name.inputValid || !email.inputValid || !password.inputValid || !agreePolitic}
                                    onClick={handleRegister}
                                    color="blue">
                                    Sing up
                                </Button>
                            </div>
                        </div>
                    </form>
                    <div className={classes.loginWith}>
                        <p className={classes.loginWith__text}>Or sign in with</p>
                        <div className={classes.loginWith__content}>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/google.jpg")} alt="google" />
                            </div>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/facebook.jpg")} alt="facebook" />
                            </div>
                            <div className={classes.loginWith__app}>
                                <img src={require("../../../img/apple.jpg")} alt="apple" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : // Email verification
            modalType === "verification" ? (
                <div className={classes.modal}>
                    <div className={classes.heading}>
                        <div className={classes.heading__row}>
                            <h1 className={classes.heading__title}>Email verification</h1>
                        </div>
                        <p className={classes.heading__text}>
                            Verification link was send to your email, please restart the page after you submit verification
                        </p>
                    </div>
                    <div className={classes.button}>
                        <Button onClick={() => window.location.reload()} color="blue">
                            Reload
                        </Button>
                    </div>
                </div>
            ) : // Password reset
            modalType === "forgotPass" ? (
                <div className={classes.modal}>
                    <div className={classes.heading}>
                        <div className={classes.heading__row}>
                            <h1 className={classes.heading__title}>Password reset</h1>
                        </div>
                        <p className={classes.heading__text}>We will send reset password link to your email</p>
                    </div>
                    <div className={classes.form__inputBlock}>
                        <p className={classes.form__text}>Email Address</p>
                        <Input
                            value={email.value}
                            onChange={(e) => {
                                email.onChange(e);
                                setAuthError("");
                            }}
                            onBlur={() => email.onBlur()}
                            className={classes.form__input}
                            placeholder="Enter your e-mail"
                        />
                        <p className={classes.error}>
                            {email.isDirty && email.isEmpty
                                ? "Поле не може бути пустим"
                                : email.isDirty && email.emailError
                                ? "Невірно вказаний email"
                                : null}
                        </p>
                    </div>

                    <div className={classes.button}>
                        <Button onClick={resetPassword} disabled={!email.inputValid} color="blue">
                            Reset password
                        </Button>
                    </div>
                </div>
            ) : modalType === "forgotPassSend" ? (
                <div className={classes.modal}>
                    <div className={classes.heading}>
                        <div className={classes.heading__row}>
                            <h1 className={classes.heading__title}>Password reset</h1>
                        </div>
                        <p className={classes.heading__text}>
                            Reset password link was send to your email, please restart the page after you submit verification
                        </p>
                    </div>

                    <div className={classes.button}>
                        <Button onClick={() => window.location.reload()} color="blue">
                            Reload
                        </Button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AuthModal;
