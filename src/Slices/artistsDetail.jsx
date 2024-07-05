import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl ='https://api.spotify.com/v1' ;
const token =window.localStorage.getItem('token');


export const fetchArtistsDetail =createAsyncThunk('artist/fetchArtistsDetail', async(id, {getState}) =>{
    if(!token){
        throw new Error('Token is missing or invalid');
    }
    const res =await axios.get(`${baseUrl}/artists/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    });
    return res.data;
})

export const fetchArtistsTracks =createAsyncThunk(
    'artists/fetchArtistTracks', async (id) =>{
        const res = await axios.get(`${baseUrl}/artists/${id}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return res.data;
    }
)

 const artistSlice =createSlice({
    name: 'artist',
    initialState: {
        selectedArtist:{},
        artistTrack:{},
        loading: null,
        error: null,
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchArtistsDetail.pending, (state) =>{
            state.loading =true;
            console.log('loading...');
        })
        .addCase(fetchArtistsDetail.fulfilled, (state, {payload}) =>{
            state.loading =false;
            console.log('fulfilled...');
            state.selectedArtist =payload;
            state.error =null;
        })
        .addCase(fetchArtistsDetail.rejected, (state, action) =>{
            state.loading =false;
            console.log('rejected...');
            state.error =action.error.message || 'An error Occurred'
        })
        .addCase(fetchArtistsTracks.fulfilled, (state, {payload}) =>{
            state.artistTrack =payload;
        })
    }
 }) 

 export default artistSlice.reducer;