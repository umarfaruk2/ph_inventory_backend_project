import { bulkUpdateStockServices, getStockByIdServices, getStockServices, postStockServices, updateStockServices } from "../services/stock.services.js";


export const stockGetController = async (req, res, next) => {
    try {
        const data = await getStockServices();
        res.status(200).json({message: 'get new item successfully!', data: data})
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const stockGetByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await getStockByIdServices(id);
        res.status(200).json({message: 'get new item successfully!', data: data})
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const stockPostController = async (req, res, next) => {
    try {
        const item = await postStockServices(req.body);
        const {_id, brand} = item;

        // update brand
        // const updateBrand = await brandModel.updateOne({ _id: brand.id }, {
        //     $push: {products: _id}
        // })
        res.status(200).json({message: 'Add new item successfully!', data: item, brandData: updateBrand})
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const stockUpdateController = async  (req, res, next) => {   
    try {
        const {id} = req.params;
        const update = await updateStockServices(id, req.body);
        res.status(200).json({message: 'stock update successfully', data: update});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}

export const stockBulkUpdateController = async  (req, res, next) => {   
    try {
        const update = await bulkUpdateStockServices(req.body);
        res.status(200).json({message: 'stock update successfully', data: update});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}