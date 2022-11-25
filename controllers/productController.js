import productModel from "../models/productSchema.js";

export const productController = async (req, res, next) => {
    try {
        const item = new productModel(req.body);
        await item.save();
        res.status(200).json({message: 'Add new item successfully!'})
    } catch (error) {
        console.log(error);
    }
}