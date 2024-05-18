import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "SEA : go to sea and do backflip!"
];