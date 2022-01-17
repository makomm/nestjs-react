import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const client = axios.create({
    baseURL: API_URL,
  });
  

export async function login(data){
    return await client({
        method: "POST",
        url: "/login",
        data
    }).then(response => {
        const { token, login } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('login', login);
    })
}

export async function nextCase() {
    const token = localStorage.getItem('token');
    return await client({
        method: "GET",
        url: "/case",
        headers:{
            "Authorization": token
        }
    }).then(response=>response.data)
}