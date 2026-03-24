//Imports
import { postData } from "@/types";
import { CreatePostData } from "@/types";
//Function
const fetchPosts = async (id: number) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://dummyjson.com";
  const res = await fetch(`${BASE_URL}/posts/user/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return {
      success: false,
      message: "Unable to retrieve user's info!",
      data: null,
    };
  }
  const data = await res.json();
  const posts: postData[] = data.posts.map((post: postData) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    tags: post.tags,
    reactions: post.reactions,
    views: post.views,
  }));
  return {
    success: true,
    message: "Successfully retrieved!",
    data: posts,
  };
};
const createPost = async (postData: CreatePostData) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://dummyjson.com";
  const res = await fetch(`${BASE_URL}/posts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  if (!res.ok) {
    return {
      success: false,
      message: "Unable to create post!",
      data: null,
    };
  }
  //Success
  const createdPost = await res.json();
  return {
    success: true,
    message: "Successfully Created New Post!",
    data: createdPost,
  };
};
//Export
export { fetchPosts, createPost };
