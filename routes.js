import contactRouter from './contacts/index';

import express from 'express';
const router = express.Router();

router.use('/contact', contactRouter);

export default router;
