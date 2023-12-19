import express from 'express';
import { GET_QUESTION, POST_QUESTION, DELETE_QUESTION } from '../controllers/questions.js';
import authUser from "../middleware/auth.js"

const router = express.Router();

router.get('/questions', authUser, GET_QUESTION);
router.post('/question', authUser , POST_QUESTION);
router.delete('/question/:id', authUser, DELETE_QUESTION);

export default router;
