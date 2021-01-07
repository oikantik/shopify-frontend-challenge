import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY,
    type: "movie",
    page: 1,
  },
});

export const axiosInstanceForLocalApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL_SAVE_SHARE,
});
