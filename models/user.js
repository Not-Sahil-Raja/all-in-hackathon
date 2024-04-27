import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  user: {
    type: Object,
    required: true,
  },

  learner: {
    type: Boolean,
    required: true,
  },
});

export default models.User || model("User", userSchema);
