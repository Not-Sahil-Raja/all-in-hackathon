import connectDB from "@/database/db";
import ProblemPost from "@/models/problempost.model";

export const GET = async (req, res) => {
  try {
    await connectDB();
    const problemPost = await ProblemPost.find({})
      .sort({ upvotes: -1 })
      .limit(3);
    if (!problemPost) {
      return new Response("Problem post not found", { status: 404 });
    }
    return new Response(JSON.stringify(problemPost), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
