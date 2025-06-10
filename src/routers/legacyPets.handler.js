import { faker } from '@faker-js/faker';

export function mockingPetsHandler(req, res, next) {
  const pets = [];
  for (let i = 0; i < 10; i++) {
    pets.push({
      name: faker.animal.cat(),
      type: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 })
    });
  }
  res.json(pets);
}