import axios from 'axios';


export const callApi = async(url) => {


    const token =window.localStorage.getItem('token');
    const options ={
        headers :{
            Authorization : `Bearer + ${token}`,
            "Content-Type": "application/json",
        }
    }
    const res =await axios(url, options);
    return res.data;

};
