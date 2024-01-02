import axios from 'axios'

import { PRODUCTION_URL } from '../Config/constant'


export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}
//
export const api = async (data) => {
  console.log(data)
  const { PATH, METHOD, PAYLOAD } = data
  switch(METHOD){
    case 'post':
      return (await axios.post(`${PRODUCTION_URL}/${PATH}`, PAYLOAD)).data
    case 'get':
      return (await axios.post(`${PRODUCTION_URL}/${PATH}`, PAYLOAD)).data
    default:
      break;
  }
}
