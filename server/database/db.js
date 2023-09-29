import mongoose from "mongoose";
import { MONGO_URI } from "../utils/utils.js";

const Connection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Databse connected successfully");
  } catch (error) {
    console.log(error, "error while connecting to database");
  }
};

export default Connection;
