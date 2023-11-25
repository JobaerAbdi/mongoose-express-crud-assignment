/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type UserOrder = {
    productName: string;
    price: number;
    quantity: number;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: UserOrder[];
};


 export interface UserStaticModel extends Model<User> {
 
  isUserExists(userId: number ): Promise<User | null>
}
