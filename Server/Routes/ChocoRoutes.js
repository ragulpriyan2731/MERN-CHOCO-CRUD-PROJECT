
import express from 'express'
const router = express.Router()
import {createChoco} from "../Controller/ChocoController.js";

router.get('/all',createChoco)
router.post('/create',createChoco)
export default router