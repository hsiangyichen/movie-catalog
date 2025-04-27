import express from "express";
import { connectRedis } from "./services/redisClient.js";
import movieRoute from "./routes/movieRoutes.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// Connect to Redis at app startup
connectRedis().catch(console.error);

// Movie routes
app.use("/movies", movieRoute);

// Test homepage
app.get("/", (req, res) => {
  res.send("Welcome to the Movie Catalog Service!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
