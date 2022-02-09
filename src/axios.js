import axios from 'axios';
import store from "./store";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});


instance.interceptors.request.use(
  (config) => {
    config.headers.common["Authorization"] = `Bearer ${store.getState().user.accessToken}`;

		return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;
