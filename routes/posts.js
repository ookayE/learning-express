import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all Posts
router.get("/");

//get a single post
router.get("/:id");

// Create new Post
router.post("/");

// Update Post
router.put("/:id");

// Delete Post
router.delete("/:id");

export default router;
