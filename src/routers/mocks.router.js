import { Router } from 'express';
import { generateUsers } from '../services/mocking.service.js';
import { mockingPetsHandler } from './legacyPets.handler.js';
import userService from '../services/user.service.js';
import petService from '../services/pet.service.js';

const router = Router();

router.get('/mockingpets', mockingPetsHandler);

router.get('/mockingusers', (req, res, next) => {
  const { qty = 50 } = req.query;
  const users = generateUsers(parseInt(qty));
  res.json(users);
});

router.post('/generateData', async (req, res, next) => {
  const { users: uQty = 0, pets: pQty = 0 } = req.body;
  const users = generateUsers(parseInt(uQty));
  await userService.insertMany(users);
  const petsInserted = await petService.generateAndInsert(parseInt(pQty));
  res.json({
    insertedUsers: users.length,
    insertedPets: petsInserted.length
  });
});

export default router;