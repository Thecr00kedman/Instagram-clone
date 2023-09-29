import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: { type: Array, ref: "post" },
});

const User = mongoose.model("user", UserSchema);
export default User;
