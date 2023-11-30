import axios from 'axios'

export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}

export const login = async (credential) => {
  console.log(credential)
  const returnData = await true
  return returnData
}
