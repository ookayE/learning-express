import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all Posts
router.get("/", (request, response, next) => {
  const limit = parseInt(request.query.limit);

  //check to make sure limit is a positive number
  if (!isNaN(limit) && limit > 0) {
    response.status(200).json(posts.slice(0, limit));
  } else {
    response.status(200).json(posts);
  }
});

//get a single post
router.get("/:id", (request, response, next) => {
  const id = parseInt(request.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the ID of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    response.status(200).json(post);
  }
});

// Create new Post
router.post("/", (request, response, next) => {
  const newPost = {
    id: posts.length + 1,
    title: request.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 404;
    return next(error);
  } else {
    posts.push(newPost);
  }

  response.status(201).json(posts);
});

// Update Post
router.put("/:id", (request, response, next) => {
  const id = parseInt(request.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    post.title = request.body.title;
    response.status(200).json(posts);
  }
});

// Delete Post
router.delete("/:id", (request, response, next) => {
  const id = parseInt(request.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    posts = posts.filter((post) => post.id !== id); //return all posts except the one with the ID of the deleted post
    response.status(200).json(posts);
  }
});

export default router;
