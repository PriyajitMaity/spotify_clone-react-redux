import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl ='https://api.spotify.com/v1' ;
const albumId ='1wRPtKGflJrBx9BmLsSwlU,4YRxDV8wJFPHPTeXepOstw,0sSxphmGskGCKlwB9xa6WU,6CXEwIaXYfVJ84biCxqc9k';
const token =window.localStorage.getItem('token');


export const fetchArtistsList =createAsyncThunk('artists/fetchArtistList', 
    async () =>{
    const res =await axios.get(`${baseUrl}/artists/?ids=${albumId}`, {
        headers :{
            Authorization: `Bearer ${token}`,
        }
    });
    return res.data;
})


const artistsListSlice =createSlice({
    name: 'artists',
    initialState:{
        artistsList: {},   
        loading: false,
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchArtistsList.pending, (state) =>{
            console.log('Pending...');
            state.loading =true;
        })
        .addCase(fetchArtistsList.fulfilled, (state, {payload}) =>{
            console.log('fulfilled...');
            state.artistsList =payload;
            state.loading =false;
        })
        .addCase(fetchArtistsList.rejected, (state) =>{
            console.log('rejected...');
            state.loading =false;
        })
    }
})

export default artistsListSlice.reducer;