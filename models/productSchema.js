import mongoose from "mongoose";
import validator from "validator";
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        unique: [true, "Name must be unique"],
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
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }
                let isValid = true;
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false;
                    }
                });
                return isValid;
            },
            message: 'Please provide valid image urls'
        }
    }],
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

const productModel = mongoose.model("Product", productSchema);

export default productModel;