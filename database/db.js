import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connInstance = await mongoose.connect(process.env.MongoDB_URI, {
      dbName: "test",
    });
    console.log("MongoDB Connected : ", connInstance.connection.host);
  } catch (e) {
    console.log("MongoDB Connection Error : ", e.message);
  }
};

export default connectDB;
