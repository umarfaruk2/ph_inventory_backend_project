import { createSupplierService, getSupplierByIdsService, getSuppliersService, updateSupplierService } from "../services/supplier.services.js";

export const createSupplier = async (req, res, next) => {
  try {
    const result = await createSupplierService(req.body);
    res.status(200).json({
      message: "data successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "could't get data",
      err: error.message,
    });
  }
};

export const getSupplier = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await getSuppliersService(id);
      if (!result) {
        res.status(400).json({
          message: "could't get data",
          err: error.message,
        });
      }
      res.status(200).json({
        message: "data successfully",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "could't get data",
        err: error.message,
      });
    }
  };

export const getSupplierById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSupplierByIdsService(id);
    if (!result) {
      res.status(400).json({
        message: "could't get data",
        err: error.message,
      });
    }
    res.status(200).json({
      message: "data successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "could't get data",
      err: error.message,
    });
  }
};


export const updateSupplier = async  (req, res, next) => {   
    try {
        const {id} = req.params;
        const update = await updateSupplierService(id, req.body);
        res.status(200).json({message: 'supplier update successfully', data: update});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        });
    }
}