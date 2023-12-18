import express from "express";
import {ADD_USER, LOGIN} from "../controllers/user";

const router = express.Router();

router.post("/users", ADD_USER);
router.post("/users/login", LOGIN);

export default router;

