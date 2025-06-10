import { Router } from 'express';
import PetModel from '../models/pet.model.js';

const router = Router();

router.get('/', async (req, res, next) => {
  const pets = await PetModel.find();
  res.json(pets);
});

export default router;