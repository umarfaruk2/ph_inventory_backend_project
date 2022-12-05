import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a brand name"],
        maxLength: 100,
        unique: true,
        lowerCase: true
    },
    description: String,
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
        lowerCase: true
    },
    website: {
        type: String,
        validate: [validator.isURL, 'Please provide a valid url']
    },
    location: String,
    products: [{
        type: ObjectId,
        ref: "Product"
    }],
    suppliers: [{
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    }],
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
}, {
    timestamps: true
});

const brandModel = mongoose.model("Brand", brandSchema);

export default brandModel;