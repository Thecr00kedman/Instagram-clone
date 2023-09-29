import { Router } from "express";
import { createPost, getUserPosts } from "../controllers/postController.js";

const router = Router();

router.post("/", createPost);
router.get("/:userID", getUserPosts);

export default router;
