import connectDB from "@/database/db";
import ExcerciseLesson from "@/models/excerciseLesson.model";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const excercises = await ExcerciseLesson.find()
      .sort({ createdAt: -1 })
      .limit(3);
    return new Response(JSON.stringify(excercises), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
