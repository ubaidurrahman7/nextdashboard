import mongoose from "mongoose";

const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGODB);

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e;
  }
};

export default connectToDB;
