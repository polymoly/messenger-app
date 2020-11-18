const DATA = [
  {
    name: "user 1 ",
    id: 1,
    chats: [
      {
        id: "1",
        messege:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.",
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
