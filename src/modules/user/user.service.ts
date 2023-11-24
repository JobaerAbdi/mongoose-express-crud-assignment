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

export const userServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateSingleUser,
    deleteSingleUser
};