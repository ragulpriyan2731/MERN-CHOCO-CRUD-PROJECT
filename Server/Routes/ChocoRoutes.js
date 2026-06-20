
import express from 'express'
const router = express.Router()
import {createChoco} from "../Controller/ChocoController.js";
import { getALLChoco } from '../Controller/ChocoController.js';

router.get('/all',getALLChoco)
router.post('/create',createChoco)
export default router