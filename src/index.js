import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());
const users = {
  username: "bobesponja",
  avatar:
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
};

const tweets = {
  username: "bobesponja",
  tweet: "eu amo o hub",
};

app.get("/tweets", (req, res) => {
  tweets.forEach((tweet) => {
    users.find((user) => {
      if (user.username === tweet.username) {
        tweet.avatar = user.avatar;
      }
    });
  });
  const ultimosTweets = tweets.slice(0, 10);
  res.status(201).send(ultimosTweets);
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const novoTweet = { username, tweet }
  tweets.unshift(novoTweet)
  res.status(201).send("OK");
});

app.post("/sing-up", (req, res) => {
  const { username, avatar } = req.body;
  const novoUser = { username, avatar }
  users.push(novoUser) 
  res.status(201).send("OK");
});

app.listen(5000, () => console.log("Server running in port 5000"));
