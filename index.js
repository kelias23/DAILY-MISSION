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
  "HIKE: Explore a nearby forest or park."
  "SUNRISE: Wake up early to catch the sunrise."
  "KINDNESS: Surprise someone with a small act of kindness."
  "LEARN: Expand your vocabulary with a new word."
  "PHOTO: Capture something interesting with your phone camera."
  "DANCE: Have a dance party at home."
  "WRITE: Send a handwritten letter to someone."
  "COOK: Try a new recipe for dinner."
  "PLANT: Start an indoor garden by planting a seed."
];