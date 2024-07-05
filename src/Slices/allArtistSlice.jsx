import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl ='https://api.spotify.com/v1' ;
const token =window.localStorage.getItem('token');
const artistsIds ='1wRPtKGflJrBx9BmLsSwlU';



 export const fetchAllArtists =createAsyncThunk(
   'allArtist/fetchAllArtists', async () =>{
    if(!token){
        throw new Error('Missing access token');
    }else{
    const res =await axios.get(`${baseUrl}/artists/${artistsIds}/related-artists`, {
        headers :{
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
};
   }
)
   


export const allArtistSlice =createSlice({
    name: 'allArtist',
    initialState:{
        allArtists: [],
        
        loading: false,
        
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchAllArtists.pending, (state) =>{
            state.loading =true;
            console.log('loading...');
        })
        .addCase(fetchAllArtists.fulfilled, (state, {payload}) =>{
            state.loading =false;
            state.allArtists =payload
            console.log('fulfilled...');

        })
        .addCase(fetchAllArtists.rejected, (state) =>{
            state.loading= false;
            console.log('rejected...');

            
        })
        
    }
})


export default allArtistSlice.reducer;