import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// Get all Posts
router.get("/", getPosts);

//get a single post
router.get("/:id", getPost);

// Create new Post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
