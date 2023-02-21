import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";
import Button from "../../UI/button/Button";
import classes from "./LogOutModal.module.scss";
const LogOutModal = ({ onClose }) => {
    const auth = getAuth();

    const dispatch = useDispatch();

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            dispatch(removeUser());
            onClose();
        });
    };
    return (
        <div className={classes.modal}>
            <h1 className={classes.modal__title}>Are you sure want to logout?</h1>
            <div className={classes.modal__buttons}>
                <div className={classes.button}>
                    <Button onClick={() => onClose()} color={"white"}>
                        Cancel
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button onClick={handleSignOut} color={"blue"}>
                        Yes, Logout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
