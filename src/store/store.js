import { configureStore } from "@reduxjs/toolkit";
import tariffSlice from "./slices/tariffSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        tariff: tariffSlice,
        user: userReducer,
    },
});
