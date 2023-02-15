import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTariffDuration } from "../../../store/slices/tariffSlice";
import classes from "./SelectButtons.module.scss";
const SelectButtons = () => {
    const [activeButton, setActiveButton] = useState("6");
    const dispatch = useDispatch();
    return (
        <div className={classes.selectButtons}>
            <button
                onClick={() => {
                    setActiveButton("6");
                    dispatch(setTariffDuration("6"));
                }}
                className={`${classes.button + " " + classes.button_left} ${activeButton === "6" && classes.button_active}`}>
                6 months
            </button>
            <button
                onClick={() => {
                    setActiveButton("12");
                    dispatch(setTariffDuration("12"));
                }}
                className={`${classes.button + " " + classes.button_right} ${activeButton === "12" && classes.button_active}`}>
                12 months
            </button>
        </div>
    );
};

export default SelectButtons;
