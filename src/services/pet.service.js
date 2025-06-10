import PetModel from '../models/pet.model.js';
import { faker } from '@faker-js/faker';

export default {
  generateAndInsert: async (qty) => {
    const pets = [];
    for (let i = 0; i < qty; i++) {
      pets.push({
        name: faker.animal.cat(),
        type: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 15 })
      });
    }
    return PetModel.insertMany(pets);
  }
};