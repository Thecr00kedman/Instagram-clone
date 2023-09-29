import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, ref: "user" },
  img: { type: mongoose.Schema.Types.String, ref: "user" },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  caption: { type: mongoose.Schema.Types.String, ref: "user" },
  createdAt: { type: Date, default: Date.now() },
  likes: { type: mongoose.Schema.Types.String, default: 0, ref: "user" },
  comments: { type: mongoose.Schema.Types.ObjectId, ref: "comment" },
});

const Post = mongoose.model("post", PostSchema);
export default Post;
