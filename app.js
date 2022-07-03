const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

// middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//mongo db
const dbUri =
  "mongodb+srv://vipulpathak113:2Uaioro6WzJtsaa5@blog-db.99a22rn.mongodb.net/db-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3005);

// Routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.use("/blogs", blogRoutes);

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
