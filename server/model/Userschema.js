import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true
    },

    phone:
    {
        type: Number,
        required: true
    },

    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    
    address:
    {
        type: String,
        required: true
    },
    answer:
    {
        type: String,
        required: true
    },

    role:{
        type: Number,
        default:0,
    },  
},
{timestamps: true }
);


export default mongoose.model("users",UserSchema);