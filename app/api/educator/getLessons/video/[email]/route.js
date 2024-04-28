import connectDB from "@/database/db";
import Image from "@/models/imageLesson.model";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const email = params.email;
    const images = await Image.find({
      "image_user.email": email,
    })
      .sort({ createdAt: -1 })
      .limit(5);
    return new Response(JSON.stringify(images), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
