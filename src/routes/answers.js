
import express from 'express';
import {GET_ANSWERS, POST_ANSWER, DELETE_ANSWER} from '../controllers/answers';

const router = express.Router();

router.get('/question/:id/answers', GET_ANSWERS);
router.post('/question/:id/answers', POST_ANSWER);
router.delete('/answer/:id', DELETE_ANSWER);

export default router;
