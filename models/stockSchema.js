import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = new mongoose.Schema({
    productId: {
        type: ObjectId,
        ref: "Product",
        required: true
    },
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        // unique: [true, "Name must be unique"],
        minLength: [3, "Name must be least 3 characters."],
        maxLength: [100, "Name is too large."],
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "liter", "pcs", "bag"],
            message: "Unit value can't be {VALUE}, must be kg/liter/pcs/bag"
        }
    },
    imageUrls: [{
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url"]
    }],
    price: {
        type: Number,
        required: true,
        min: [0, "product price can't be negative"]
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "product quantity can't be negative"]
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true
        }
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: "{VALUE} is not a valid status"
        }
    },
    store: {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a brand name"],
            lowerCase: true,
            enum: {
                values: ["dhaka", "chittagong"],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            ref: "Store",
            required: true
        }
    },
    suppliedBy: {
        name: {
            type: String,
            trim: true,
            required: [true, 'Please provide a supplier name'],
        },
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    },
    sellCount: {
        type: String,
        default: 0,
        min: 0
    }
}, {
    timestamps: true
})

// productSchema.pre('save', function(next) {
//     console.log('Before saving data');
//     next();
// })

// productSchema.post('save', function(doc, next) {
//     console.log('After saving data');
//     next();
// })

const stockModel = mongoose.model("Stock", stockSchema);

export default stockModel;