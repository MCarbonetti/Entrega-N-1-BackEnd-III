import { Router } from 'express';
import UserModel from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res, next) => {
  const users = await UserModel.find();
  res.json(users);
});

export default router;