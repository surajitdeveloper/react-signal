import axios from 'axios'

import { PRODUCTION_URL } from '../Config/constant'

export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}
//
export const login = async (credential) => {
  const api = await axios.post(`${PRODUCTION_URL}/login`,credential)
  return api.data
}
