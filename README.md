Key Concepts of Static Servers:
Static Files: These are files that do not change dynamically on the server side and are served as-is. Examples include HTML, CSS, JavaScript, images, fonts, and videos.

Express.js: A popular Node.js web framework that makes it easy to set up a static server. It provides middleware to serve static files effortlessly.

Creating and implementing middleware:

- Running middleware on entire server. We created a logger function
  and stored it in its own file (within a middleware folder), and imported it into our server.js. Then wrapped it in app.use(logger). Now any time we hit the server with any kind of method, the function is called.

Creating a custom error handler w/ json response.

creating error.js

Our errorHandler middleware is called when we use
const error = new Error(`A post with the ID of ${id} was not found`);
in posts.js

To be more specific with error message, we can access our error message (found in posts.js) in our errorHandler middleware via the error parameter we are passing in as an argument.
