export const PRODUCTION_URL = 'https://mrovpnawkyiutwl3jrxswrhgre0nlslp.lambda-url.us-west-2.on.aws'

export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SAVE_MACHINE_DETAILS = 'SAVE_MACHINE_DETAILS'

export const FETCHING_DATA = 'FETCHING_DATA'

export const LOGIN_API = 'LOGIN_API'

export const API_CALL = [
  { NAME: LOGIN_API, PATH: 'login', STATUS: '', CODE: 0, DATA: { token: '' }, METHOD: 'post', PAYLOAD: {}, afterApiAction: SET_USER_TOKEN }
]

export const STATUS = [
  { CODE: 200, TYPE: 'Success', DATA: {} },
  { CODE: 400, TYPE: 'Error', MSG: '' },
  { CODE: 500, TYPE: 'Error', MSG: '' }
]
