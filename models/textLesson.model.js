import { Schema, models, model } from "mongoose";

const textLessonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TextLesson = models.TextLesson || model("TextLesson", textLessonSchema);

export default TextLesson;
