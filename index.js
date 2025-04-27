import express from "express";
import { createClient } from "redis";
import movieRoute from "./routes/movieRoutes.js";

const app = express();
const PORT = 8080;

// Create Redis client
const publisher = createClient();

app.use(express.json());

// Connect to Redis
async function connectRedis() {
  await publisher.connect();
}
connectRedis().catch(console.error);

// Publish message API
app.post("/publish", async (req, res) => {
  const { channel, message } = req.body;
  await publisher.publish(channel, message);
  res.send(`Message has been published to channel: ${channel}`);
});

// Test homepage
app.get("/", (req, res) => {
  res.send("Welcome to the Movie Catalog Service!");
});

app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
