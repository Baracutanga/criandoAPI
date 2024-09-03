import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('User', userSchema)