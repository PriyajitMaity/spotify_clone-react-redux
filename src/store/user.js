import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { callApi } from '../components/utils/callApi'


export const fetchUserData =createAsyncThunk('user/fetchUserData', () =>callApi('https://api.spotify.com/v1/me'));


const userStore =createSlice({
    name: 'user',
    initialState:{},
    reducers:{
        setUser:(state, {payload})=>{
            state.token =payload.token;
        },
        getUser:(state) =>{
            return state.user;
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchUserData.pending, (state, action) =>{
            state.loading =true;
        });
        builder.addCase(fetchUserData.fulfilled, (state, {payload}) =>{
            state.loading =false;
            // console.log(payload);
            state.userUrl =payload.external_urls.spotify || '';
        });
        builder.addCase(fetchUserData.rejected, (state) =>{
            state ={},
            state.loading =false;
        })
        
    }
})


export  const userActions = userStore.actions;;
export default userStore;