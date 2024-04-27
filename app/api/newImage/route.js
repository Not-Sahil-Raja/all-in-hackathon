export const POST = async (req) => {
  const data = await req.json();
  console.log("Data from the API : ", data);
  return new Response("OK", { status: 200 });
};
