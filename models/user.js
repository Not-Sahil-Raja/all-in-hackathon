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

const User = models.users || model("users", userSchema);

export default User;
