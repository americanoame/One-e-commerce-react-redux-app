import express from 'express';
import { signup, login, signOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/sign-out', signOut);

export default router;