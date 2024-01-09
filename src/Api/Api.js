import axios from 'axios'

import { PRODUCTION_URL } from '../Config/constant'

import { store } from '../Redux/store'

export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}

axios.interceptors.request.use(function (config) {
  const token = store.getState().token;
  if(token){
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
  }
  else{
    return config;
  }
});

export const api = async (data) => {
  // console.log(data)
  const { PATH, METHOD, PAYLOAD } = data
  switch (METHOD) {
    case 'post':
      return (await axios.post(`${PRODUCTION_URL}/${PATH}`, PAYLOAD)).data
    case 'get':
      return (await axios.get(`${PRODUCTION_URL}/${PATH}`)).data
    default:
      break
  }
}
