import express from "express";
import {
  addPhoto,
  getPhoto,
  addYouToube,
  getYouTube,
  deletePhoto,
} from "../controllers/indexController.js";

import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/addPhoto").post(protect, admin, addPhoto);
router.route("/getPhoto").get(getPhoto);
router.route("/addYouToube").post(protect, admin, addYouToube);
router.route("/getYouTube").get(getYouTube);
router.route("/deletePhoto/:id").delete(protect, admin, deletePhoto);

export default router;
