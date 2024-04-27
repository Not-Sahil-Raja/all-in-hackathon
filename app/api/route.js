import connectDB from "@/database/db.js";

export const GET = async () => {
  await connectDB();
  return Response.json({ "API status": "OK" });
};
