import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide a category name'],
        lowercase: true,
        unique: true
    },
    description: String,
    imageUrl: {
        type: String,
        validate: [validator.isURL, 'please provide a image url']
    }
}, {
    timestamps: true
});

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;