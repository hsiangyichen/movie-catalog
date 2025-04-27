import express from "express";
import movieRoute from "./routes/movieRoutes.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Movie Catalog Service!");
});

app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
