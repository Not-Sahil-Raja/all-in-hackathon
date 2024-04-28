import connectDB from "@/database/db";
import ExcerciseLesson from "@/models/excerciseLesson.model";

export const POST = async (req, res) => {
  const { title, description, postedBy, tags, mcqs } = await req.json();
  console.log({ title, description, postedBy, tags, mcqs });
  if (!title || !description || !postedBy || !tags || !mcqs) {
    return new Response(
      JSON.stringify({ error: "Please fill in all fields" }),
      { status: 400 }
    );
  }
  try {
    await connectDB();
    const newLesson = await ExcerciseLesson.create({
      title,
      description,
      postedBy,
      tags,
      mcqs,
    });
    await newLesson.save();
    return new Response(
      JSON.stringify({
        message: "Excercise created successfully",
        data: newLesson,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
