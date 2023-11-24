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
  console.log(userId);
  
  return result;
};

const updateSingleUser = async (id: string, userData: User) => {
  // console.log(id)
  const result = await UserModel.findOneAndUpdate({id}, {$set: userData})
  console.log(result);
  
  return result;
};

export const userServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateSingleUser,
};