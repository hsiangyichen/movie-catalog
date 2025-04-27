import { createClient } from "redis";

export const publisher = createClient();

/* ---------------------------- Connect to Redis ---------------------------- */
export async function connectRedis() {
  try {
    await publisher.connect();
    console.log("Connected to Redis.");
  } catch (error) {
    console.error("Redis connection error:", error);
  }
}
