import { createCategoryService, getCategoryService } from "../services/category.services.js";

export const createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'create category successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'create category is not valid',
            err: error.message
        });
    }
}

export const getCategory = async (req, res, next) => {
    try {
        const result = await getCategoryService();
        res.status(200).json({
            status: 'success',
            message: 'get category data successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: "could't not get data",
            err: error.message
        });
    }
}