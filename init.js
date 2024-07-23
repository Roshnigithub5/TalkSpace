const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
    .then((res)=>{
        console.log("connection successful!");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
{
    from : "neha",
    to : "priya",
    message : "send me your photo",
    createdAt : new Date(),
},
{
    from : "mithi",
    to : "rashu",
    message : "hey..",
    createdAt : new Date(),
},
{
    from : "soni",
    to : "radhika",
    message : "meet me soon",
    createdAt : new Date(),
},
{
    from : "pinki",
    to : "suresh",
    message : "send me my money right now",
    createdAt : new Date(),
},  
{
    from : "pankaj",
    to : "mohit",
    message : "come fast, otherwise i can't wait more.",
    createdAt : new Date(),
},
];

Chat.insertMany(allChats);