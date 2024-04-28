import connectDB from "@/database/db";
import User from "@/models/user.js";

export const POST = async (req) => {
  const data = await req.json();
  console.log(data.user.email);
  await connectDB();
  const userexists = await User.findOne({ "user.email": data.user.email });

  if (userexists) {
    console.log("user exists");
    return new Response("user already exists");
  }
  const newuser = User.create(data);
  return new Response("new user created");
};

export const GET = async () => {
  await connectDB();
  const users = await User.findOne({ "user.email": "roxxyman69@gmail.com" });
  return Response.json(users);
};
