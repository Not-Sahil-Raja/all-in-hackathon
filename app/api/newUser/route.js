import connectDB from "@/database/db";
import User from "@/models/user.js";

export const POST = async (req) => {
  const data = await req.json();
  console.log(data.user);
  await connectDB();
  const userexists = User.findOne({ "user.email": data.user.email });
  if (userexists.length != 0) {
    console.log("user exists");
    return new Response("user already exists");
  } else {
    const newuser = User.create(data);
    console.log("new user");
    return new Response("new user created");
  }
};

export const GET = async () => {
  await connectDB();
  const users = await User.findOne({ "user.email": "roxxyman69@gmail.com" });
  return Response.json(users);
};
