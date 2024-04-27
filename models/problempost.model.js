import { Schema, models, model } from "mongoose";

const problemPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
      required: true,
    },
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
    // upvotes: {
    //   type: Number,
    //   default: 0,
    // },
  },
  {
    timestamps: true,
  }
);

const ProblemPost =
  models.ProblemPost || model("ProblemPost", problemPostSchema);

export default ProblemPost;
