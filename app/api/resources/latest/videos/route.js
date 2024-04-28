import connectDB from "@/database/db";
import Image from "@/models/imageLesson.model";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const images = await Image.find().sort({ createdAt: -1 }).limit(3);
    return new Response(JSON.stringify(images), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
