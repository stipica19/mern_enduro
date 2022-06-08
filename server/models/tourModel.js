import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const tourSchema = mongoose.Schema(
  {
    tour_number: {
      type: String,
      required: true,
    },
    checkIn_date: {
      type: Date,
      required: true,
    },
    checkOut_date: {
      type: Date,
      required: true,
    },
    tour_duration: {
      type: String,
      required: true,
      default: "5/8",
    },
    tour_availability: {
      type: Boolean,
      required: true,
      default: true,
    },
    tour_space: {
      type: Number,
      required: true,
      default: 20,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
