import connectDB from "@/database/db";
import ProblemPost from "@/models/problempost.model";

export const GET = async (req, res) => {
  console.log("get working");
  try {
    await connectDB();
    const allpost = await ProblemPost.find();
    return new Response(JSON.stringify(allpost), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};
