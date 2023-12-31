import { SET_USER_TOKEN } from '../../Config/constant'

import { login } from '../../Api/Api'


export const userAction = async (data) =>{
  try{
    console.log("login action --->",data)
    const loginData = await login({ username, password }) 
    return {
      type: SET_USER_TOKEN,
      payload: {
        setUserToken: loginData.token
      }
    } 
  }
  catch(err){
    states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).status = API_STATUS.FAILED
    states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).message = err.response.data.message
  }
}