import { getAllMovies } from "../services/movieService.js";

/* ------------------- GET request to retrieve all movies ------------------- */
export async function getMovies(req, res) {
  try {
    const movies = await getAllMovies();
    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error getting movies:", error);
    return res.status(500).json({ message: "Server error retrieving movies." });
  }
}
