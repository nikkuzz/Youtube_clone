import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
     reducer: {
        bar : barSlice,
        search : searchSlice,
        chat : chatSlice,
     },
});

export default store;