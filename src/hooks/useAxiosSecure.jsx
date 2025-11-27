import axios from 'axios'
import React, { useEffect } from 'react'
import UseAuth from './UseAuth'
import { useNavigate } from 'react-router'

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
  const {user, logoutUser} = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // JWT Verify
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
      return config
    })

    // Interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      console.log(error);
      const statusCode = error.status;
      if (statusCode === 401 || statusCode === 403) {
        logoutUser()
        .then(() => {
          navigate('/login')
        })
      }
      return Promise.reject(error)
    })

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.request.eject(resInterceptor);
    }
  },[user])

  return axiosSecure;
}

export default useAxiosSecure
