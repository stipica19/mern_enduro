import express from "express";
import { addTour, getAllTours } from "../controllers/tourController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, admin, addTour);
router.route("/").get(getAllTours);

export default router;
