import connectDB from "@/database/db";
import TextLesson from "@/models/textLesson.model";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const texts = await TextLesson.find().sort({ createdAt: -1 }).limit(3);
    return new Response(JSON.stringify(texts), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
