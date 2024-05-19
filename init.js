const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection succesful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from:'Tony',
        to:'Peter',
        msg:"send me the pics",
        created_at:new Date()
    },
    {
        from:"John",
        to:"Mohan",
        msg:"Jai Shree Ram",
        created_at:new Date()
    },
    {
        from:"juli",
        to:"Evy",
        msg:"Hello! How are you",
        created_at: new Date(),
    }
];
Chat.insertMany(allChats);