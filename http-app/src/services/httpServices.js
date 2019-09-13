import axios from "axios";
import {toast} from 'react-toastify'

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
  if (!expectedError) {
    console.log("Logging the error", error)
    toast.error("出现不可预估的错误")
  }
  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}