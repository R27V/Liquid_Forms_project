const express = require("express");
const userRouter = require("./routers/userRouter");
const assetRouter = require("./routers/assetRouter");
const formRouter = require("./routers/formRouter");
const responseRouter = require("./routers/responseRouter");
const utilRouter = require("./routers/util");
const cors = require("cors");

const app = express();
const port = 5000;

// middleware
// to convert json to javascript
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

app.use("/user", userRouter);
app.use("/asset", assetRouter);
app.use("/form", formRouter);
app.use("/util", utilRouter);
app.use("/response", responseRouter);

app.get("/", (req, res) => {
  res.send("Response from Express");
});

app.use(express.static("./static/resources"));

app.listen(port, () => {
  console.log("Server Started..");
});
