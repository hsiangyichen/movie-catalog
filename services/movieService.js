import { promises as fs } from "fs";

const MOVIES_FILE = "./data/movies.json";

/* ----------------------------- Read all movies ----------------------------- */
export async function getAllMovies() {
  try {
    const data = await fs.readFile(MOVIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading movies file:", error);
    return [];
  }
}
