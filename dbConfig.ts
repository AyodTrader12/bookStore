import { connect } from "mongoose";
import env from "dotenv";

env.config();
export const dbCOnfig = async () => {
  try {
    await connect(process.env.MONGO_DB as string).then(() => {
      console.clear();
      console.log("database connected...💖✌");
    });
  } catch (error) {
    console.log(error);
  }
};
