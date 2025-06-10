import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routers/mocks.router.js';
import usersRouter from './routers/users.router.js';
import petsRouter from './routers/pets.router.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/adoptme');

app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.listen(3000);