import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const role = Math.random() < 0.5 ? 'user' : 'admin';
    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 80 }),
      password: bcrypt.hashSync('coder123', 10),
      role,
      pets: []
    });
  }
  return users;
}