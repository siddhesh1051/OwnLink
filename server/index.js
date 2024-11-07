const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authroutes = require("./routes/authroutes");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("error occured");
  });

app.use(express.json());
// app.use(
//   cors({
//     // origin: ["https://ownlink.vercel.app"],
//     origin: [
//       "https://www.ownlink.me",
//       "http://localhost:3000",
//       "https://ownlink.vercel.app",
//       "https://ownlink.me",
//       "https://www.ownlink.vercel.app",
//       "http://192.168.8.41:8081",
//     ],
//     // origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(cors({ origin: "*" }));
app.use("/api", authroutes);
app.get("/", (req, res) => {
  res.send("Hello api");
});
