const express = require("express");
const app = express();
const ejs = require("ejs");

const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().then(()=>{
    console.log("connection succesful");
}).catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from:"Neha",
//     to:"Anju",
//     msg:"Send me your exam sheets",
//     created_at: new Date(),
// });

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

app.get("/", (req,res)=>{
    res.send("Root is wroking");
})

app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

app.listen(8080, ()=>{
    console.log("Server is listening to port 8080");
})