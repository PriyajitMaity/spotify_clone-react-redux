import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl ='https://api.spotify.com/v1/browse/categories';
const token =window.localStorage.getItem('token');

export const fetchCharts =createAsyncThunk('charts/fetchCharts',  async () =>{
    const res= await axios.get(baseUrl, {
        params: { limit : 50 },
        headers : {
            Authorization : `Bearer ${token}`,
        },
    });
    // console.log(res.data.categories);
        return res.data;
        
    }
);


const chartSlice =createSlice({
    name: 'charts',
    initialState:{
        featuredCharts: {},
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchCharts.pending, (state) =>{
            state.loading =true;
            // console.log('Loading...');
        })
        .addCase(fetchCharts.fulfilled, (state, {payload}) =>{
            state.loading =false;
            // console.log('Fulfilled...');
            state.featuredCharts =payload;
        })
        .addCase(fetchCharts.rejected, (state) =>{
            // console.log('Rejected...');
            state.loading =false;
        })
       
    }
})

export default chartSlice.reducer;