import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        minLength: [3, "Name must be least 3 characters."],
        maxLength: [100, "Name is too large."],
        lowercase: true
    },
    email: {
        type: Sting,
        validate: [validator.isEmail, "provide a valid email"],
        trim: true,
        lowercase: true,
        unique: true
    },
    brand: {
        name: {
            type: String,
            trim: true,
            required: true
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true
        }
    },
    contactNumber: [{
        type: String,
        required: [true, 'Please provide a contact number'],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "please provide a valid phone number."
        }
    }],
    emergencyContactNumber: {
        type: Sting,
        required: [true, 'Please provide a emergency contact number'],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "please provide a valid phone number."
        }
    },
    tradeLicenceNumber:{
        type: String,
        required: [true, 'Please provide you trade licence number']
    },
    presentAddress: {
        type: Sting,
        required: [true, 'Please provide your present address']
    },
    permanentAddress: {
        type: Sting,
        required: [true, 'Please provide your permanent address']
    },
    location: {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a brand name"],
            lowerCase: true,
            enum: {
                values: ["dhaka", "chittagong"],
                message: "{VALUE} is not a valid name"
            }
        }
    },
    imageUrls: {
        type: String,
        validate: [validator.isURL, 'Please provide a valid url']
    },
    nationalImageUrl: {
        type: String,
        required: true,
        validate: [validator.isURL, 'Please provide a valid url']
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive', 'discontinued'],
            message: "{VALUE} is not a valid status"
        },
        default: "active"
    }
}, {
    timestamps: true
})

const supplierModel = mongoose.model("Supplier", supplierSchema);

export default supplierModel;