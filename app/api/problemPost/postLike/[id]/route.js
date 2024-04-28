import connectDB from "@/database/db";
import ProblemPost from "@/models/problempost.model";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const { id } = params;
    const problemPost = await ProblemPost.findById(id);

    if (!problemPost) {
      return new Response("Problem post not found", { status: 404 });
    }
    console.log(problemPost.upvote);
    return new Response(JSON.stringify(problemPost), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    await connectDB();
    console.log(params);
    const { id } = params;
    const problemPost = await ProblemPost.findById(id);

    if (!problemPost) {
      return new Response("Problem post not found", { status: 404 });
    }

    if (problemPost.upvotes) {
      problemPost.upvotes += 1;
    } else {
      problemPost.upvotes = 1;
    }
    await problemPost.save();

    return new Response(JSON.stringify(problemPost), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
