// {
//     "userId": 1,
//     "username": "john_doe",
//     "password": "$2b$12$3fJ",
//     "fullName": {
//       "firstName": "John",
//       "lastName": "Doe"
//     },
//     "age": 30,
//     "email": "john.doe@example.com",
//     "isActive": true,
//     "hobbies": ["gardening", "coding"],
//     "address": {
//       "street": "456 Oak Ave",
//       "city": "Smalltown",
//       "country": "USA"
//     }
//   }

//============================================================================

// const insertOrderToUserCollection = async (
//     userId: number | string,
//     orderData: {
//       productName: string;
//       price: number;
//       quantity: number;
//     }
//   ) => {
//     const userExists = await User.isUserExists(userId);
//     if (!userExists) {
//       throw new Error("User not found");
//     }
//     const { productName, price, quantity } = orderData;
//     const result = await User.findOneAndUpdate(
//       { userId, orders: { $exists: true } },
//       { $push: { orders: { productName, price, quantity } } },
//       { upsert: true, new: true }
//     );
//     return result;
//   };
  
  
  