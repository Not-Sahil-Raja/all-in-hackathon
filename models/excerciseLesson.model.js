import connectDB from "@/database/db";
import { Schema, model, models } from "mongoose";

const excerciseLessonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // questions: {
    //   type: Array,
    //   required: true,
    // },
    description: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    mcqs: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ExcerciseLesson =
  models.ExcerciseLesson || model("ExcerciseLesson", excerciseLessonSchema);

export default ExcerciseLesson;
