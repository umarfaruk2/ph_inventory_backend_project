import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: (value) => {
                validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 3,
                    minNumbers: 1,
                    minUppercase: 1,
                    minSymbols: 1
                })
            },
            message: "Please {VALUE} is not strong enough"
        }
    },
    confirmPassword: {
        type: String,
        required: [true, 'Confirm password is required'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password don't match"
        }
    },
    role: {
        type: String,
        enum: ['buyer', 'store-manager', 'admin'],
        default: 'buyer'
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name can't be more than 100 character"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 character"],
        maxLength: [100, "Name can't be more than 100 character"]
    },
    contactNumber: {
        type: String,
        validate: [validator.isMobilePhone, 'Please provide a valid contact number']
    }, 
    shippingAddress: String,
    imageUrl: {
        type: String,
        validate: [validator.isURL, 'Please provide a valid url']
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'blocked'],
        default: 'active'
    },
    passwordCreatedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
}, {
    timestamps: true
});

userSchema.pre("save", function(next) {
    const password = this.password;
    const hashPass = bcrypt.hashSync(password, 10);

    this.password = hashPass;
    this.confirmPassword = undefined;
    next();
});

userSchema.methods.comparePass = function (pass1, pass2) {
    const comparePass = bcrypt.compareSync(pass1, pass2);

    return comparePass;
}

const userModel = mongoose.model('User', userSchema);

export default userModel;