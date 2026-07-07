import  express from "express"

const router = express.Router();

import { signup,login } from "../Controller/usercontroller.js";

// Signup
router.post("/signup",signup );

// Login
router.post("/login", login);

export default router;