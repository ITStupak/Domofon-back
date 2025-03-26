import { Router } from 'express';
import addressesRouter from './addresses.js';
import authRouter from './auth.js';

const router = Router();

router.use('/addresses', addressesRouter);
router.use('/auth', authRouter);

export default router;
