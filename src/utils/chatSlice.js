import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage : (state,action) => {
            //only 15 msgs on live chat bar
                state.messages.splice(15,1);
                state.messages.unshift(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;