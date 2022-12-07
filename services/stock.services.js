import stockModel from "../models/stockSchema.js";

export const getStockServices = async () => {
    const result = await stockModel.find({});
    return result;
}

export const getStockByIdServices = async (id) => {
    // const result = await stockModel.findById({ _id: id })
    // .populate('store.id')
    // .populate('supplierBy.id')
    // .populate('brand.id');

    // explore aggression
    const result = await stockModel.findById({ _id: id });
    return result;
}

export const postStockServices = async (data) => {
    const item = new stockModel(data);
    await item.save();
    return item;
}

export const updateStockServices = async (id, data) => {
    const updateData = await stockModel.updateOne({_id: id}, {
        $set: data
    }, { runValidators: true })
    return updateData;
}

export const bulkUpdateStockServices = async (data) => {
    // const updateData = await productModel.updateMany({ _id : data.id }, data.data , { runValidators: true })

    const products = [];
    data.ids.forEach(product => {
        products.push(stockModel.updateOne({ _id: product.id }, product.data))
    });

    const updateData = await Promise.all(products);
    return updateData;
}