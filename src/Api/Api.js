import axios from "axios"

export const todoList = async () => {
    const api = await axios.get("https://dummyjson.com/todos");
    return api.data.todos
}