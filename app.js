const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/index");
const messageRouter = require("./routes/messages");

//setup static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//setup view engines
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//parse body data
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/messages", messageRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Mini Message board v2 - listening on port ${PORT}!`)
);
