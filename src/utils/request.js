import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./tools.js";

export const instance = axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["authorization"] = "bearer " + getToken();
    NProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done();
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done();
    // console.dir(error);
    // if (error.response && error.response.status === 401) {
    //   window.location.href = "/login";
    // }
    return Promise.reject(error);
  }
);

export const get = (url, params) => instance.get(url, { params });

export const post = (url, data) => instance.post(url, data);

export const put = (url, data) => instance.put(url, data);

export const del = (url) => instance.delete(url);
