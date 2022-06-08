import express from "express";
import {
  addNewApplyTour,
  getApply,
  getApplyById,
} from "../controllers/applyController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(addNewApplyTour).get(getApply);
router.get("/:id", getApplyById);

export default router;
