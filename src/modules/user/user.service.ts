import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async(user:User ):Promise<User>=>{
  const result = await UserModel.create(user)
  return result;
};

const getAllUsersFromDB = async():Promise<User[]>=>{
  const result = await UserModel.find()
  return result;
};

const getSingleUserFromDB = async(userId: number | string):Promise<User | null>=>{
  const result = await UserModel.findOne({userId})  
  return result;
};

const updateSingleUser = async (userId: string, userData: User): Promise<User | null> => {
  const result = await UserModel.findOneAndUpdate({userId}, {$set: userData})
  return result;
};

const deleteSingleUser = async (userId: string): Promise<User | null> => {
  const result = await UserModel.findByIdAndDelete(userId)
  return result;
};


const insertOrderToUserCollection = async (
  userId: number,
  orderData: {
    productName: string;
    price: number;
    quantity: number;
  }
) => {
  const userExists = await UserModel.isUserExists(userId as number);
  if (!userExists) {
    throw new Error("User not found");
  }
  const { productName, price, quantity } = orderData;
  const result = await UserModel.updateOne(
    { userId },
    { $push: { orders: { productName, price, quantity } } },
    { upsert: true, new: true }
  );
  return result;
};

const getAllOrder = async (userId: number | string) => {
  const userExists = await UserModel.isUserExists(userId as number);
  if (!userExists) {
    throw new Error("User not found");
  }
  const result = await UserModel.findOne({userId},{orders: 1});
  return result;
};

const getOrdersTotalPrice = async (userId: number | string) => {
  const userExists = await UserModel.isUserExists(userId as number);
  if (!userExists) {
    throw new Error("User not found");
  }
  const result = await UserModel.aggregate([
    {$match:  {userId}},
    {$unwind: '$orders'},
    {$group: {_id: '$userId', totalPrice: {$sum: {$multiply: ['$orders.price', '$orders.quantity']}}}},
    {$project: {totalPrice: 1 }}
  ]);
  return result;
};

export const userServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateSingleUser,
    deleteSingleUser,
    insertOrderToUserCollection,
    getAllOrder,
    getOrdersTotalPrice
};





