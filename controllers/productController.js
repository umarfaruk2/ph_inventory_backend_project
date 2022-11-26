import productModel from "../models/productSchema.js";
import { bulkUpdateProduct, getProductsServices, postProductsServices, updateProduct } from "../services/product.services.js";


export const productGetController = async (req, res, next) => {
    try {
        const data = await getProductsServices();
        res.status(200).json({message: 'get new item successfully!', data: data})
    } catch (error) {
        console.log(error);
    }
}

export const productPostController = async (req, res, next) => {
    try {
        const item = await postProductsServices(req.body);
        res.status(200).json({message: 'Add new item successfully!', item: item})
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const productUpdateController = async  (req, res, next) => {   
    try {
        const {id} = req.params;
        const update = await updateProduct(id, req.body);
        res.status(200).json({message: 'product update successfully', data: update});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const productBulkUpdateController = async  (req, res, next) => {   
    try {
        const update = await bulkUpdateProduct(req.body);
        res.status(200).json({message: 'product update successfully', data: update});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}