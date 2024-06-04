import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware function used to set up static files
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`Working on port ${PORT}`);
});
