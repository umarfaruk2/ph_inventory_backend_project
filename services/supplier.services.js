import supplierModel from "../models/supplierSchema.js"

export const createSupplierService = async (data) => {
    const result = await supplierModel.create(data);
    return result;
}

export const getSuppliersService = async (id) => {
    const result = await supplierModel.find({ });
    return result;
}

export const getSupplierByIdsService = async (id) => {
    const result = await supplierModel.findById({ _id: id });
    return result;
}

export const updateSupplierService = async (id, data) => {
    const result = await supplierModel.updateOne({ _id: id }, data);
    return result;
}