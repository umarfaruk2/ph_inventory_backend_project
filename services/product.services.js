import productModel from "../models/productSchema.js";

export const getProductsServices = async () => {
    const product = await productModel.find({});
    return product;
}

export const postProductsServices = async (data) => {
    const item = new productModel(data);
    await item.save();
    return item;
}

export const updateProduct = async (id, data) => {
    const updateData = await productModel.updateOne({_id: id}, {
        $set: data
    }, { runValidators: true })
    return updateData;
}

export const bulkUpdateProduct = async (data) => {
    // const updateData = await productModel.updateMany({ _id : data.id }, data.data , { runValidators: true })

    const products = [];
    data.ids.forEach(product => {
        products.push(productModel.updateOne({ _id: product.id }, product.data))
    });

    const updateData = await Promise.all(products);
    return updateData;
}