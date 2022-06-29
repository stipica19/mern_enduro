import express from 'express';
import {
  addTour,
  getAllTours,
} from '../controllers/tourController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import Tour from '../models/tourModel.js';
const router = express.Router();

router.route('/').post(protect, admin, addTour);
router.route('/').get(getAllTours);

router.post('/updateSve', (req, res) => {
  console.log('first');
  // let t = Tour.updateMany({ $set: { tour_space: 16 } });
  Tour.updateMany({}, { tour_space: 16 }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
});

export default router;
