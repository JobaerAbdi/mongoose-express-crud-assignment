import { z } from "zod";

const userOrderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userSchema = z.object({
  userId: z.number().min(1, { message: 'ID must be greater than or equal to 1'}),
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  fullName: z.object({
    firstName: z.string().min(1, { message: 'FirstName is required' }),
    lastName: z.string().min(1, { message: 'LastName is required' }),
  }),
  age: z.number().min(1, { message: 'Age is required' }),
  email: z.string().email({ message: 'Invalid email format' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).min(1, { message: 'Hobbies is required' }),
  address: z.object({
    street: z.string().min(1, { message: 'Street is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    country: z.string().min(1, { message: 'Country is required' }),
  }),
  orders: z.array(userOrderSchema).min(1, { message: 'Orders is required' }),
});

export const UserZodSchema = userSchema;


