import express from 'express';
const router = express.Router();
import {
  loginUser,
  registerUser,
  updateProfile,
  updateProfilePicture,
  userProfile,
} from '../controllers/userControllers';
import { authGuard } from '../middlewares/authMiddleware';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authGuard, userProfile);
router.put('/update-profile', authGuard, updateProfile);
router.put('/update-profile-picture', authGuard, updateProfilePicture);

export default router;
