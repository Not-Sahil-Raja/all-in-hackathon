import connectDB from "@/database/db";
import Image from "@/models/imageLesson.model";

export const POST = async (req) => {
  const data = await req.json();
  console.log("Data from the API : ", data);
  await connectDB();
  const newImage = await Image.create({
    image_url: data.image_url,
    image_name: data.image_name,
    image_description: data.image_description,
    image_user: data.image_user,
  });
  return new Response("OK", { status: 200 });
};
