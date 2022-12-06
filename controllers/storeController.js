import { createStoreService, getStoreService } from "../services/store.services.js";

export const createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'create store successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'create data is not valid',
            err: error.message
        });
    }
}

export const getStore = async (req, res, next) => {
    try {
        const result = await getStoreService();
        res.status(200).json({
            status: 'success',
            message: 'get store data successfully',
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