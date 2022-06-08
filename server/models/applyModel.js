import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const applySchema = mongoose.Schema(
  {
    /* fromDate: {
      type: Date,
      required: true,
    },
    unitlDate: {
      type: Date,
      required: true,
    },*/
    tour_type: {
      type: String,
      required: true,
    },
    tour_number: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tour",
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    mobitel: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    number_person: {
      type: Number,
      required: true,
      min: 0,
      max: 15,
    },
    traveling: {
      type: String,
      required: true,
    },
    rentaBike: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Apply = mongoose.model("Apply", applySchema);

export default Apply;
