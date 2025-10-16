import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";

// App config
const app = express();
const port = 4000

app.use(express())
app.use(cors())

// dbconnection
connectDb()

app.get("/",(req,res) => {
  res.send("Api is working")
})

app.listen(port,() => {
  console.log(`Server is running http://localhost:${port}`);
  
})

//   mongodb+srv://amankhan:88818283@cluster0.xcvqwrh.mongodb.net/?