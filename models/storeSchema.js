import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a brand name"],
        lowerCase: true,
        enum: {
            values: ["dhaka", "chittagong"],
            message: "{VALUE} is not a valid name"
        },

    },
    description: String,
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }, 
    manager: {
        name: String,
        contactNumber: String,
        id : {
            type: ObjectId,
            ref: 'User'
        }
    }
}, {
    timestamps: true
});

const storeModel = mongoose.model("Store", storeSchema);

export default storeModel;