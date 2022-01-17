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
        const { token, login, _id } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('login', login);
        localStorage.setItem('userId', _id);
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

export async function labelCase(labelId, caseId) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const payload = {
        label: labelId,
        user: userId,
    }

    return await client({
        method: "POST",
        url: `/case/${caseId}`,
        data: payload,
        headers:{
            "Authoriation": token
        }
    })
}

export async function label() {
    const token = localStorage.getItem('token');
    return await client({
        method: "GET",
        url: "/label",
        headers:{
            "Authorization": token
        }
    }).then(response=>response.data)
}