const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("connection successful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let port = 8080;

//Index Route
app.get("/", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create Route
app.post("/chats", (req, res) => {
  let { from: sender, message: msg, to: receiver } = req.body;
  let newChat = new Chat({
    from: `${sender}`,
    message: `${msg}`,
    to: `${receiver}`,
    createdAt: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  let { message: msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: `${msg}` },
    { runValidators: true },
    { new: true }
  );
  res.redirect("/chats");
});

//Delete/Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  // let chat = await Chat.findById(id);
  let deletedChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(port, () => {
  console.log("app is listening to port...");
});
