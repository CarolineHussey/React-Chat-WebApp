import Post from "./Post";
import classes from "./PostList.module.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  const [error, setError] = useState(null);

  /* async function handleAddPost(newPostData) {
    setError(null);
    try {
      if (!response.ok) {
        throw new Error("Failed to add post.");
      }
      setPosts((prevPosts) => [newPostData, ...prevPosts]);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  }*/

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", color: "red" }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default PostList;
