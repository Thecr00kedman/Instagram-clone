import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        desc: {
            type: String,
            max: 2300,
        },
        img: {
            type: String,
        },
        likes: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    { timestamps: true },
);


export const Post = mongoose.model("Post", postSchema);