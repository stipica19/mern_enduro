import express from "express";
import {
  addReview,
  getReview,
  updateGuestBook,
} from "../controllers/guestBookController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(addReview).get(getReview);

router.put("/:id", updateGuestBook);

export default router;
