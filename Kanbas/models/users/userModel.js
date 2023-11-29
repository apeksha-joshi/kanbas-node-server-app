import mongoose from "mongoose";
import schema from './userSchema.js';

const Users = mongoose.model("Users", schema);

export default Users;