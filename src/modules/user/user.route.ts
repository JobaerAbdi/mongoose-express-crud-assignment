import express from 'express';
import { userController } from './user.controller';
const router = express.Router();

router.post('/users', userController.createUserIntoDB);
router.get('/users', userController.getAllUsersFromDB);
router.get('/users/:userId', userController.getSingleUserFromDB);
router.put('/users/:userId', userController.updateSingleUser);
router.delete('/users/:userId', userController.deleteSingleUser);


export const  userRoutes = router;