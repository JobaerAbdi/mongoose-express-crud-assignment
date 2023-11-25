import { Schema, model } from 'mongoose';
import { User, UserOrder, UserStaticModel } from './user.interface';

const userOrderSchema = new Schema<UserOrder>({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

const userSchema = new Schema<User, UserStaticModel>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'User id is required'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'User name is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'isActive is required'],
  },
  hobbies: {
    type: [String],
    required: [true, 'Hobbies is required'],
  },
  address: {
    street: {
      type: String,
      required: [true, 'Address is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
  orders: {
    type: [userOrderSchema],
  },
});


userSchema.statics.isUserExists = async function (userId: number) {
  const result = await this.findOne({ userId }); 
  return result ? true : false; 
};

export const UserModel = model<User, UserStaticModel>('User', userSchema);





// userSchema.statics.isUserExists = async function (id: string) {
//    const existingUser = await UserModel.findOne({id})
//    return existingUser;
// };


