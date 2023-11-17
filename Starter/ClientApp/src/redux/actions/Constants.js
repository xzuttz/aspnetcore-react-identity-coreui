import axios from 'axios'
// import { htmlToText } from "html-to-text";
import toastr from 'toastr'

export const SERVER_URL = `https://${window.location.hostname}:7225/api`
// export const SERVER_URL = `http://${window.location.hostname}:${window.location.port}/api123`;

export const myAxios = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const axiosErrorHandler = (err) => {
  if (err.response) {
    toastr.error(err.response.data)
  } else if (err.request) {
    toastr.error('Server disconnected.')
  } else {
    toastr.error('Error corrupted.')
  }
}

export const ActionTypes = {
  AUTH_USER: 'auth_user',
  ADD_USER: 'add_user',
  LOAD_USERS: 'load_users',
  UPDATE_USER: 'update_user',
  DELETE_USER: 'delete_user',
}
