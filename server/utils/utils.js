import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

export const PORT = process.env.PORT;
export const SECRET_KEY = process.env.SECRET_KEY;
export const MONGO_URI = process.env.MONGO_URI;

export const hashPass = async (word) => {
  return await bcrypt.hash(word, 12);
};

export const comparePass = async (pass, databasePass) => {
  return await bcrypt.compare(pass, databasePass);
};
