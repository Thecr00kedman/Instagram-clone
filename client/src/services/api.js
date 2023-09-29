import axios from "axios";
axios.defaults.withCredentials = true;

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const signupUser = async (data) => {
  try {
    return await axios.post(`${BACKEND_URL}/user/signup`, data);
  } catch (error) {
    console.log(error, "error while calling signup user api");
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post(`${BACKEND_URL}/user/login`, data);
  } catch (error) {
    console.log(error, "error while calling loginUser api");
  }
};

export const uploadPost = async ({ img, name, userID, caption }) => {
  try {
    return await axios.post(`${BACKEND_URL}/post`, {
      img,
      name,
      userID,
      caption,
    });
  } catch (error) {
    console.log(error, "error while calling uploadPost api");
  }
};
