import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user";
import chartSlice from "../Slices/chartSlice";
import artistsSice from "../Slices/artistsSice";
import allArtistSice from "../Slices/allArtistSlice";
import logger from 'redux-logger';
import artistsDetail from "../Slices/artistsDetail";


const store = configureStore({
    reducer:{
        user : userStore.reducer,
        charts: chartSlice,
        artists: artistsSice,
        allArtist: allArtistSice,
        artist: artistsDetail,
    
},
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),   
 },
)

export default store;