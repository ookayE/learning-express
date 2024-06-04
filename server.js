import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import colors from "colors";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { error } from "console";
const PORT = process.env.PORT || 5000;

// Get directory name
const __filename = fileURLToPath(import.meta.url); //the path of the current file you are in
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

//middleware function used to set up static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Working on port ${PORT}`);
});
