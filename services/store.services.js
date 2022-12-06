import storeModel from "../models/storeSchema.js";

export const createStoreService = async (data) => {
    const result = await storeModel.create(data);
    return result;
}

export const getStoreService = async () => {
    const result = await storeModel.find({});
    return result;
}