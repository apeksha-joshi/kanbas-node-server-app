import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique:true,
        index:true,
    },
    password : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        default: "",
    },
    lastName : {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    dob: {
        type: Date,
        default: "",
    },
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER"
    },
    
});

export default userSchema;