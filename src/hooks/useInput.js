import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = () => {
        setDirty(true);
    };

    const clear = () => {
        setValue("");
    };

    return {
        value,
        setValue,
        onChange,
        isDirty,
        onBlur,
        clear,
        ...valid,
    };
};

export default useInput;
