import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tariffDuration: "6",
};
export const tariffSlice = createSlice({
    name: "tariff",
    initialState,
    reducers: {
        setTariffDuration: (state, action) => {
            state.tariffDuration = action.payload;
        },
    },
});

export const { setTariffDuration } = tariffSlice.actions;
export default tariffSlice.reducer;
