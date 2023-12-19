
import express from 'express';
import {GET_ANSWERS, POST_ANSWER, DELETE_ANSWER} from '../controllers/answers.js';
import authUser from '../middleware/auth.js';
const router = express.Router();

router.get('/question/:id/answers',authUser, GET_ANSWERS);
router.post('/question/:id/answers', authUser,POST_ANSWER);
router.delete('/answer/:id',authUser, DELETE_ANSWER);

export default router;
