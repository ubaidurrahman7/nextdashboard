import { User } from "./models";
import connectToDB from "./utils";

export const fetchUser = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (e) {
    console.log(e);
    // throw new Error("Failed to fetch user");
  }
};
