import Post from "../models/postSchema.js";
import User from "../models/userSchema.js";

export const createPost = async (req, res) => {
  try {
    const { userID, img, name, caption } = req.body;
    const user = await User.findOne({ _id: userID });
    if (!user) {
      return res.json({ error: "User not found" });
    } else if (!img || img.length < 1) {
      return res.json({ error: "Upload an image" });
    } else {
      const newPost = new Post({
        img,
        userID,
        caption,
        name,
      });
      user.posts.push(newPost);
      await user.save();
      return res.json({ success: "Posted successfully" });
    }
  } catch (error) {
    res.json(error, "error while creating a post");
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userID } = req.params;
    const user = await User.findById(userID);
    if (!user) {
      return res.json({ error: "User not found" });
    } else {
      return res.json({
        message: "Posts found",
        data: {
          posts: user.posts,
          username: user.username,
        },
      });
    }
  } catch (error) {
    res.json(error, "error while getting user's post");
  }
};
