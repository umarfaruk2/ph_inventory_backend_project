import userModel from "../models/userSchema.js"

export const signUpService = async (data) => {
    const find = await userModel.find({email: data.email});
    if (find.email == data.email) {
        return false;
    } else {
        const result = await userModel.create(data);
        return result;
    }
}

export const loginService = async (email) => {
    const result = await userModel.findOne({ email });
    return result;
}