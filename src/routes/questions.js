import express from 'express';
import { GET_QUESTION, POST_QUESTION, DELETE_QUESTION } from '../controllers/questions';

const router = express.Router();

router.get('/questions', GET_QUESTION);
router.post('/question', POST_QUESTION);
router.delete('/question/:id', DELETE_QUESTION);

export default router;
