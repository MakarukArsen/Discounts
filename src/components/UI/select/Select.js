import React from "react";
import classes from "./Select.module.scss";
import { v4 } from "uuid";
const Select = ({ selected, options, fill }) => {
    return (
        <select className={classes.select}>
            <option className={classes.option} defaultValue>
                {selected}
            </option>
            {options?.map((option) => (
                <option key={v4()} className={classes.option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
