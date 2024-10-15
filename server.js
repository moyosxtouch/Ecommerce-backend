const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { dbConnect } = require("./utils/db");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", require("./routes/authRoutes"));
app.get("/", (req, res) => res.send("test success"));
const port = process.env.PORT;
dbConnect();
app.listen(port, () => console.log(`server is running on port ${port}`));
