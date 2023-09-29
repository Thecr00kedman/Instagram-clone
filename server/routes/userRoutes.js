import { Router } from "express";
import { loginuser, signupUser } from "../controllers/userController.js";

const router = Router();

router.post("/signup", signupUser)
router.post("/login", loginuser)

export default router;
