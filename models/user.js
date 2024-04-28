import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  learner: {
    type: Boolean,
    required: true,
  },
});

const User = models.users || model("users", userSchema);

export default User;
