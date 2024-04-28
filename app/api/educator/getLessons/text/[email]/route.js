import connectDB from "@/database/db";
import TextLesson from "@/models/textLesson.model";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const email = params.email;
    console.log(email);
    const lessons = await TextLesson.find({ "postedBy.email": email })
      .sort("-createdAt")
      .limit(2);
    return new Response(JSON.stringify(lessons), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
