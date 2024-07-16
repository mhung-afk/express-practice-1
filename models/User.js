import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: { 
        type: String, 
        unique: true 
    },
    birthday: Date,
})

export default mongoose.model('users', userSchema)
