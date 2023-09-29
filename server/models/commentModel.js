import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        desc: {
            type: String,
            max: 500,
        },
    },
    { timestamps: true },
);

export const Comment = mongoose.model("Comment", commentSchema)