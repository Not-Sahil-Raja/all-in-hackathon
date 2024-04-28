import connectDB from "@/database/db";
import User from "@/models/user.js";

export const POST = async (req) => {
  const data = await req.json();
  const { username, email, picture, learner } = data;
  await connectDB();
  const newuser = await User.create({ username, email, picture, learner });
  return new Response("User created successfully", { status: 200 });
};
