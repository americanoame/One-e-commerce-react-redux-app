import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const saltRounds = 10;
  const hashedPassword =  bcryptjs.hashSync(password, saltRounds);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};
