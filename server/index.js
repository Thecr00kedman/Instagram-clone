import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./utils/utils.js";
import Connection from "./database/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

//routes
app.use("/user", userRoutes);
app.use("/post", postRoutes);

Connection();
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
