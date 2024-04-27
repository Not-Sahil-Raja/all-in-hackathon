import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  user: {
    type: String,
    required: true,
  },

  learner: {
    type: Boolean,
    required: true,
  },
});

export default models.User || model("User", userSchema);
