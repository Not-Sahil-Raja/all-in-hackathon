import TextLesson from "@/models/textLesson.model";
import connectDB from "@/database/db";

export const POST = async (req, res) => {
  const { title, content, postedBy } = await req.json();
  if (!title || !content) {
    return new Response(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }
  try {
    await connectDB();
    const newLesson = await TextLesson.create({
      title,
      content,
      postedBy,
    });
    await newLesson.save();
    return new Response(
      JSON.stringify({
        message: "Lesson created successfully",
        data: newLesson,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
