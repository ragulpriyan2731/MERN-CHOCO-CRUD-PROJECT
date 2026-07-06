import express from express
const router = express.Router();

import { createChocolate,getChocolates,getChocolateById,updateChocolate,deleteChocolate } from "../Controller/ChocoController";
import checkAuth from "../middleware/check-auth";
// Protect all routes below this line
router.use(checkAuth);

// Get all chocolates of logged-in user
router.get("/all", getChocolates);

// Get one chocolate
router.get("/:id", getChocolateById);

// Create chocolate
router.post("/create", createChocolate);

// Update chocolate
router.patch("/:id", updateChocolate);

// Delete chocolate
router.delete("/:id", deleteChocolate);

export default  router