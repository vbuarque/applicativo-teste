import axios from 'axios';

export const api = axios.create({
   baseURL: "http://192.168.15.2:3000/" //lembrar de trocar para 'ip' quando commitar
   //baseURL: "http://localhost:3000/"
})