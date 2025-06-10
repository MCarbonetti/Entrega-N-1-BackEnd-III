import UserModel from '../models/user.model.js';

export default {
  insertMany: (docs) => UserModel.insertMany(docs)
};