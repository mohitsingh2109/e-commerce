import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true
    },

    slug:
    {
        type: String,
        lowercase: true
    },

},

);


export default mongoose.model("Category",CategorySchema);