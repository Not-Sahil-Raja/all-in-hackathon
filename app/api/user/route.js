import connectDB from "@/database/db";
import User from "@/models/user.js";

export const POST = async (req) => {
  const data = await req.json();
  console.log(data.user.email);
  await connectDB();
  const userexists = await User.findOne({ "user.email": data.user.email });

  if (userexists) {
    console.log("user exists");
    return new Response(
      JSON.stringify({ mesage: "user already exists", userexists: true })
    );
  }
  return new Response(
    JSON.stringify({ mesage: "user does not exist", userexists: false })
  );
};
