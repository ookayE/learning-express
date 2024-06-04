import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

//get all posts
router.get("/", (request, response) => {
  const limit = parseInt(request.query.limit);

  //check to make sure limit is a positive number
  if (!isNaN(limit) && limit > 0) {
    response.status(200).json(posts.slice(0, limit));
  } else {
    response.status(200).json(posts);
  }
});

//get a single post
router.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    response
      .status(404)
      .json({ message: `A post with the ID of ${id} was not found` });
  } else {
    response.status(200).json(post);
  }
});

// Create new Post
router.post("/", (request, response) => {
  const newPost = {
    id: posts.length + 1,
    title: request.body.title,
  };

  if (!newPost.title) {
    response.status(400).json({ message: "Please include a title" });
  } else {
    posts.push(newPost);
  }

  response.status(201).json(posts);
});

export default router;
