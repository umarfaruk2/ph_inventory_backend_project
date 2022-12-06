import brandModel from "../models/brandSchema.js"

export const createBrandService = async (data) => {
    const result = await brandModel.create(data);
    return result;
}

export const getBrandService = async () => {
    const result = await brandModel.find({}).select('-products -suppliers');
    return result;
}

export const getSingleBrandService = async (id) => {
    const result = await brandModel.findById({_id: id});
    return result;
}

export const updateBrandService = async (id, data) => {
    const result = await brandModel.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
}