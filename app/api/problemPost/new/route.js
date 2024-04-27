import ProblemPost from "@/models/problempost.model";
import connectDB from "@/database/db";

export const POST = async (req, res) => {
  const { title, description, postedBy } = await req.json();
  if (!title || !description || !postedBy) {
    return new Response("Please fill all the fields", { status: 400 });
  }
  try {
    await connectDB();
    const newPost = new ProblemPost({
      title,
      description,
      postedBy,
    });
    await newPost.save();
    return new Response("Post Created", { status: 201 });
  } catch (error) {
    console.log("Error in POST : ", error);
    return new Response("Internal Server Error Error while adding the post", {
      status: 500,
    });
  }
};
