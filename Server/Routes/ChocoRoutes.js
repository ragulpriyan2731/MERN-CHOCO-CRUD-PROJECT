
import express from 'express'
const router = express.Router()
import {createChoco} from "../Controller/ChocoController.js";

router.post('/create',createChoco)
export default router