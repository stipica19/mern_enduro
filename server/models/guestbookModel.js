import mongoose from "mongoose";

const guestBookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const GuestBook = mongoose.model("GuestBook", guestBookSchema);

export default GuestBook;
