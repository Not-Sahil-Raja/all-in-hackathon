import connectDb from "@/database/db";
import User from "@/models/user";

export const POST = async (req, res) => {
  const data = await req.json();
  await connectDb();
  console.log("data", data);
  const oldUser = await User.find({ user: data.user });
  if (oldUser) {
    return new Response("User already exists", { status: 400 });
  }

  const { user, learner } = await req.json();
  if (!user || !learner) {
    return new Response("Please fill all the fields", { status: 400 });
  }
  try {
    const newUser = new User({
      user,
      learner,
    });
    const savedUser = await newUser.save();
    return new Response(JSON.stringify(savedUser), { status: 201 });
  } catch (e) {
    console.log("Error in POST : ", e);
    return new Response("Internal Server Error Error while adding the user", {
      status: 500,
    });
  }
};
