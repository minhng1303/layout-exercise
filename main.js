const express = require("express");
const app = express();
const path = require("path");
const { router } = require("./controllers/homeController");
const { errorRouter } = require("./controllers/errorController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public/css"));
app.use(express.static("public/images"));
app.use(express.static("public/js"));

app.use(router);
app.use(errorRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server start at port " + 3000);
});
