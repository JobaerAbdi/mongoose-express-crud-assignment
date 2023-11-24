import { z } from "zod";

const userOrderValidationSchema = z.object({
  productName: z.string().min(1),
  price: z.number().min(1),
  quantity: z.number().min(1),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().min(1).max(20),
  fullName: z.object({
    firstName: z.string().min(1).max(20),
    lastName: z.string().min(1),
  }),
  age: z.number().min(1),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()).min(1),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
  }),
  orders: z.array(userOrderValidationSchema).min(1),
});

export default userValidationSchema;


