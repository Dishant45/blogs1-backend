const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
const blogRouter = require("./routes/blogroute");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("request recieved");
});
app.use("/blogs", blogRouter);

app.listen(process.env.PORT, () => {
  console.log("server started at 3000");
});
