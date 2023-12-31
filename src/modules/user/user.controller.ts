import { Request, Response } from 'express';
import { userServices } from './user.service';
// import userValidationSchema from './user.validation';

const createUserIntoDB = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // const zodParseData = userValidationSchema.parse(userData);

    const result = await userServices.createUserIntoDB(userData);
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getAllUsersFromDB = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getSingleUserFromDB = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { userId } = req.params;
    const result = await userServices.updateSingleUser(userId, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await userServices.deleteSingleUser(id);
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const insertOrderToUserCollection = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params 
    const userData = req.body;
    console.log(userId, userData);
    
    await userServices.insertOrderToUserCollection(Number(userId), userData); 
    res.status(200).json({
      status: 'success',
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params 
    const result = await userServices.getAllOrder(Number(userId));
    res.status(200).json({
      status: 'success',
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const getOrdersTotalPrice = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params 
    console.log(userId);
    const result = await userServices.getOrdersTotalPrice(Number(userId));
    res.status(200).json({
      status: 'success',
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const userController = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateSingleUser,
  deleteSingleUser,
  insertOrderToUserCollection,
  getAllOrder,
  getOrdersTotalPrice
};
