// import connectDb from "@/database/db";
// import schema from "@/models/user";

// export const POST = async (req, res) => {
//   const { user, learner } = await req.json();
//   if (!user || !learner) {
//     return res.status(400).json({ error: "Please enter all the fields" });
//   }
//   try {
//     await connectDb();
//     const newUser = new schema.User({
//       user,
//       learner,
//     });
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// };
