import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    password: null,
    id: null,
    subscriptions: [],
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.subscriptions = action.payload.subscriptions;
        },
        removeUser(state) {
            state.name = null;
            state.email = null;
            state.id = null;
            state.subscriptions = null;
        },
        updateUserName(state, action) {
            state.name = action.payload.name;
        },
        updateUserEmail(state, action) {
            state.email = action.payload.email;
        },
        updateUserSubscription(state, action) {
            state.subscriptions = action.payload.subscriptions;
        },
    },
});

export const { setUser, removeUser, updateUserName, updateUserEmail, updateUserSubscription } = userSlice.actions;

export default userSlice.reducer;
