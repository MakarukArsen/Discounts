import { configureStore } from "@reduxjs/toolkit";
import TariffSlice from "../slices/TariffSlice";
export const store = configureStore({
    reducer: {
        tariff: TariffSlice,
    },
});
