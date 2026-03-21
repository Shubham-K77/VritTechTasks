//Imports
import { postData } from "@/types";
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
//Export
export { fetchPosts };
