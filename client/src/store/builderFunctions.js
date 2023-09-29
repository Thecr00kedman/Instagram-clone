import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUserPosts = createAsyncThunk(
  "posts/userPost",
  async (userID) => {
    try {
      const {
        data: { data },
      } = await axios.get(`${BACKEND_URL}/post/${userID}`);
      return data;
    } catch (error) {
      console.log("error while calling getUserPosts api", error);
    }
  }
);
