import express from "express"


import { createChocolate,getChocolates,getChocolateById,updateChocolate,deleteChocolate } from "../Controller/ChocoController.js";
import checkAuth from "../middleware/check-auth.js";
const router = express.Router();
// Protect all routes below this line
// router.use(checkAuth);
// Create chocolate
router.post("/create",checkAuth, createChocolate);

// Get all chocolates of logged-in user
router.get("/all", getChocolates);

// Get one chocolate
router.get("/:id", getChocolateById);

// Update chocolate
router.patch("/:id",checkAuth, updateChocolate);

// Delete chocolate
router.delete("/:id",checkAuth, deleteChocolate);

export default router