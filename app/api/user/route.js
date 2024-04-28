import connectDB from "@/database/db";
import User from "@/models/user.js";

export const POST = async (req) => {
  const data = await req.json();
  console.log(data);
  await connectDB();
  const user = await User.findOne({ email: data.email });
  if (user) {
    return Response.json({ userexists: true });
  } else {
    return Response.json({ userexists: false });
  }
};
