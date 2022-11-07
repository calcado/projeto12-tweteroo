import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const users = {
  username: "",
  avatar: "",
};

const tweets = {
  username: "",
  tweet: "",
};



app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  
  
  res.status(201).send("OK");
});

app.post("/sing-up", (req, res) => {
  const { username, avatar } = req.body;
  console.log("olá");
 
  res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  const todosTweets = req.params.tweet;
  
  res.status(201).send(tweets);
 });


app.listen(5000, ()=> console.log("Server running in port 5000"));
