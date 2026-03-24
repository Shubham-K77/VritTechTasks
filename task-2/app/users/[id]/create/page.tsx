"use client";
import CreatePostForm from "@/components/custom/createPostForm";
//Imports
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const userId = Number(id);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <CreatePostForm userId={userId} />
    </div>
  );
};

export default Page;
