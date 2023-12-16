import axios from 'axios'

export const todoList = async () => {
  const api = await axios.get('https://dummyjson.com/todos')
  return api.data.todos
}
// https://mrovpnawkyiutwl3jrxswrhgre0nlslp.lambda-url.us-west-2.on.aws
export const login = async (credential) => {
  console.log(credential)
  //
  const returnData = await true
  return returnData
}
