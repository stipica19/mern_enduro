import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const applySchema = mongoose.Schema(
  {
    tour_type: {
      type: String,
      required: true,
    },
    tour_number: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Tour',
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    date_of_birth: {
      type: Date,
    },
    mobitel: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
    },
    number_person: {
      type: Number,
      required: true,
      min: 0,
      max: 20,
    },
    traveling: {
      type: String,
    },
    rentaBike: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Apply = mongoose.model('Apply', applySchema);

export default Apply;
