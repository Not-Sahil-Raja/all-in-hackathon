import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image_url: {
    type: String,
  },
  image_name: {
    type: String,
  },
  image_description: {
    type: String,
  },
  image_user: {
    type: Object,
  },
});

const Image = mongoose.models.images || mongoose.model("images", imageSchema);

export default Image;
