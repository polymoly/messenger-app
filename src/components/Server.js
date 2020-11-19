const DATA = require('./serverData');

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
