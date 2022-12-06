import categoryModel from "../models/categorySchema.js";

export const createCategoryService = async (data) => {
    const result = await categoryModel.create(data);
    return result;
}

export const getCategoryService = async () => {
    const result = await categoryModel.find({});
    return result;
}