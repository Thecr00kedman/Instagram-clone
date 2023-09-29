import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 16,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 4,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        bio: {
            type: String,
            max: 60,
            default: "",
        },
        profilePic: {
            typr: String,
            default: "",
        },
        followers: {
            type: Array,
            default: [],
        },
        following: {
            type: Array,
            default: [],
        },
        gender: {
            type: String,
            enum: ["male", 'female', 'other', 'prefernottosay']
        },
        role:{
            type:String,
            enum:['admin', 'user'],
            default:"user",
            required:true,
        },
        jwt:{
            type:String,
        }
    }
)

export const User = mongoose.model("User", userSchema);