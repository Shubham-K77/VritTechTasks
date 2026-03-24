/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
//Imports:
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { selectUserById, setUsers } from "@/store/userSlice";
import { setPosts } from "@/store/postSlice";
import NavigationBar from "@/components/custom/navigationBar";
import useFetch from "@/hooks/useFetch";
import { postData, userData } from "@/types";
import { fetchUsers } from "@/actions/userAction";
import { useCallback, useEffect } from "react";
import { fetchPosts } from "@/actions/postAction";
import UserInfoDisplay from "@/components/custom/userInfoDisplay";
import PostInfoCard from "@/components/custom/postInfoCard";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUserById(Number(id)));
  const posts = useSelector((state: any) => state.posts.posts);
  //Avoids Multiple Rendering
  const fetchPostsById = useCallback(() => fetchPosts(Number(id)), [id]);
  const { data: users, loading: usersLoading } =
    useFetch<userData[]>(fetchUsers);
  const { data: postsData, loading: postsLoading } =
    useFetch<postData[]>(fetchPostsById);
  const loading = usersLoading || postsLoading;
  //Stores Users Info
  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);
  //Stores Posts Info
  useEffect(() => {
    if (postsData && posts.length === 0) {
      dispatch(setPosts(postsData));
    }
  }, [postsData, dispatch, posts.length]);
  //Loading And Error
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white/95 flex flex-col justify-start items-center">
        <NavigationBar home={false} title="Loading..." />
        <div className="w-[90%] max-w-7xl flex flex-col justify-start items-center gap-y-12 py-12 px-4">
          {/* Loading Card */}
          <div className="w-full rounded-2xl backdrop-blur-md bg-white border border-gray-200 animate-pulse p-6">
            <div className="flex items-start gap-6 pb-6 border-b border-gray-200">
              {/* Avatar Skeleton */}
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-gray-300 to-gray-400 shrink-0"></div>
              {/* Info Skeleton */}
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-gray-200 rounded-lg w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
              </div>
            </div>
            {/* Details Grid Skeleton */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded-lg w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 rounded-lg w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
              </div>
            </div>
          </div>
          {/* Loading Indicator */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full border-2 border-blue-200 border-t-blue-500 animate-spin"></div>
            <p className="text-gray-600 font-medium">
              Loading user information...
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (!user) return <p>User not found</p>;
  //Full Name To Render
  const fullName = user?.firstName + " " + user?.lastName;
  //Component
  return (
    <div className="w-full min-h-screen bg-white/95 flex flex-col justify-start items-center">
      {/* Navigation Bar */}
      <NavigationBar home={false} title={fullName || ""} />
      {/* UserInfo Display */}
      <div className="w-[90%] max-w-7xl flex flex-col justify-start items-center gap-y-12 py-12 px-4">
        <UserInfoDisplay user={user} />
        {/* Create Post Button */}
        <div className="w-full flex justify-end">
          <button
            onClick={() => router.push(`/users/${id}/create`)}
            className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200"
          >
            Create Post
          </button>
        </div>
        {/* Posts Section */}
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Posts ({posts?.length || 0})
            </h2>
          </div>
          {/* Posts Grid */}
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: postData) => (
                <PostInfoCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl backdrop-blur-md bg-white border border-gray-200 p-12 text-center shadow-sm">
              <p className="text-gray-500 font-medium">No posts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
