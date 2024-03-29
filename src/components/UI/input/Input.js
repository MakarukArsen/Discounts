import React from "react";
import classes from "./Input.module.scss";
const Input = ({ value, onChange, ...props }) => {
    return <input {...props} value={value} onChange={onChange} className={classes.input}></input>;
};

export default Input;
