import { createBrandService, getBrandService, getSingleBrandService, updateBrandService } from "../services/brand.services.js"

export const createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'create brand successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'create brand is not valid',
            err: error.message
        });
    }
}

export const getBrand = async (req, res, next) => {
    try {
        const result = await getBrandService();
        res.status(200).json({
            status: 'success',
            message: 'get brand data successfully',
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

export const getSingleBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getSingleBrandService(id);
        
        res.status(200).json({
            status: 'success',
            message: 'get single brand data successfully',
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

export const updateBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateBrandService(id, req.body);
        
        if (!result.modifiedCount) {
            res.status(400).json({
                status: 'fail',
                message: "could't not get data",
                err: error.message
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'update brand data successfully',
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