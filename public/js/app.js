const button = document.querySelector("#get-posts-button");
const output = document.querySelector("#output");
const form = document.querySelector("#add-post-form");

const showPosts = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/posts");

    const posts = await response.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerText = post.title;
      output.appendChild(postElement);
    });
  } catch (error) {
    console.log(error);
  }
};

// Submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData("title");
  const title = formData.get("titleZ");

  try {
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error("Failed to add post");
    }

    const newPost = await response.json();
    const postElement = document.createElement("div");
    postElement.textContent = newPost.title;
    output.appendChild(postElement);
  } catch (error) {
    console.log("error adding post");
  }
}

button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
