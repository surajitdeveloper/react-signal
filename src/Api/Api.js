import axios from 'axios'

import { PRODUCTION_URL } from '../Config/constant'

import { API_NAME, API_STATUS } from '../Config/constant'
import { states } from '../Config/signalVariables'

export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}
//
export const login = async (credential) => {
  try {
    const api = await axios.post(`${PRODUCTION_URL}/login`, credential)
    return api.data
  } catch (err) {
    states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).status = API_STATUS.FAILED
    states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).message = err.response.data.message
    throw err
  }
}
