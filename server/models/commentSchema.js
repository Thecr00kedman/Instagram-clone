import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: { type: mongoose.Schema.Types.String, ref: "user" },
  img: { type: mongoose.Schema.Types.String, ref: "user" },
  createdAt: { type: Date, default: Date.now() },
  comment: { type: mongoose.Schema.Types.String, ref: "user" },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
