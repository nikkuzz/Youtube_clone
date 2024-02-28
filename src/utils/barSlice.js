import { createSlice } from "@reduxjs/toolkit";

const barSlice = createSlice({
    name:"bar",
    initialState:{
        isMenuToggled:true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuToggled = !state.isMenuToggled;
        },
        closeMenu: (state) => {
            state.isMenuToggled = false;
        },
    },

});

export const {toggleMenu,closeMenu} = barSlice.actions;
export default barSlice.reducer;