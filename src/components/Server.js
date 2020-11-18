const DATA = [
  {
    name: "user 1 ",
    id: 1,
    chats: [
      {
        id: "1",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
      {
        id: "2",
        messege: "hello world",
        isOpponent: true,
        messegeTime: "18:24",
      },
      {
        id: "3",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
    ],
  },
  {
    name: "user 2 ",
    id: 2,
    chats: [
      {
        id: "1",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
      {
        id: "2",
        messege: "hello world",
        isOpponent: true,
        messegeTime: "18:24",
      },
      {
        id: "3",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
    ],
  },
  {
    name: "user 3 ",
    id: 3,
    chats: [
      {
        id: "1",
        messege: "hello abbas",
        isOpponent: false,
        messegeTime: "18:24",
      },
      {
        id: "2",
        messege: "hello world",
        isOpponent: true,
        messegeTime: "18:24",
      },
      {
        id: "3",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
    ],
  },
  {
    name: "user 4 ",
    id: 4,
    chats: [
      {
        id: "1",
        messege: "hello reza",
        isOpponent: false,
        messegeTime: "18:24",
      },
      {
        id: "2",
        messege: "hello world",
        isOpponent: true,
        messegeTime: "18:24",
      },
      {
        id: "3",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
    ],
  },
  {
    name: "user 5 ",
    id: 5,
    chats: [
      {
        id: "1",
        messege: "hello asghar",
        isOpponent: false,
        messegeTime: "18:24",
      },
      {
        id: "2",
        messege: "hello world",
        isOpponent: true,
        messegeTime: "18:24",
      },
      {
        id: "3",
        messege: "hello world",
        isOpponent: false,
        messegeTime: "18:24",
      },
    ],
  },
];

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/add", (req, res) => {
  const { chat, id } = req.body;
  const user = DATA.find((item) => +item.id === +id);
  user.chats.push(chat);
  res.send(JSON.stringify(user));
});

app.post("/getInfo", (req, res) => {
  const { id } = req.body;
  const user = DATA.find((item) => +item.id === +id);
  res.send(
    JSON.stringify({
      chats: user.chats,
      name: user.name,
      id: user.id,
    })
  );
});

app.get("/getfirstinfo", (req, res) => {
  res.send(JSON.stringify(DATA));
});
app.listen(3001);
