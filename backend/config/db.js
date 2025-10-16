import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose.connect("mongodb+srv://amankhan:88818283@cluster0.xcvqwrh.mongodb.net/food-del").then(() => {
    console.log("db connected");
    
  })
}