import mongoose from "mongoose";

const ytSchema = mongoose.Schema({
  youtube_url: {
    type: String,
    required: true,
  },
});

const YouTube = mongoose.model("YouTube", ytSchema);

export default YouTube;
