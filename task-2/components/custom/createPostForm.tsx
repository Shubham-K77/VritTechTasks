"use client";
//Imports
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CreatePostData } from "@/types";
import { ImSpinner8 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { createPost as createPostAction } from "@/store/postSlice";
import { createPost } from "@/actions/postAction";
import { LuArrowLeft } from "react-icons/lu";
//Create Schema
const schema = z.object({
  title: z.string().min(1, "Title for the post is required!"),
  body: z
    .string()
    .min(20, "The description for the post must be 20 characters long!"),
  reactions: z.object({
    dislikes: z.number().min(1, "Value must be greater than zero"),
    likes: z.number().min(1, "Value must be greater than zero"),
  }),
  views: z.number().min(1, "Value must be greater than zero"),
});
type PostFormData = z.infer<typeof schema>;

const CreatePostForm = ({ userId }: { userId: number }) => {
  //Router
  const router = useRouter();
  //Dispatch
  const dispatch = useDispatch();
  //Tags Logic
  const [tagsInput, setTagsInput] = useState("");
  //React-Hook-Form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PostFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      body: "",
      reactions: {
        dislikes: 0,
        likes: 0,
      },
      views: 0,
    },
  });
  //Submit Logic
  const onSubmit = async (data: PostFormData) => {
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const payload: CreatePostData = {
      ...data,
      tags,
      userId,
    };
    //Submit to the actions & render the message in toast
    const response = await createPost(payload);
    if (response.success) {
      toast.success(response.message);
      dispatch(createPostAction({ postInfo: await response.data }));
      reset();
      router.push(`/users/${userId}`);
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="w-[95%] lg:w-[55%] flex flex-col justify-start items-start p-4 gap-6">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => router.back()}
        className="flex justify-center items-center gap-2 text-black hover:text-teal-700 transition-colors"
      >
        <LuArrowLeft className="w-5 h-5" />
        <span className="text-lg font-semibold">Back</span>
      </button>
      {/* Title and Description   */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <div className="text-4xl text-black font-semibold">Create a Post</div>
        <div className="text-2xl text-black/70">
          Share your thoughts and engage with the community
        </div>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-start items-start p-2 w-full gap-4"
      >
        {/* Post-Title */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-2xl text-black font-bold">Post Title</label>
          <Input
            {...register("title")}
            className="border border-black/60 w-full h-[6.5vh] p-4 text-xl text-black"
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        {/* Post-Description */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-2xl text-black font-bold">
            Post Description
          </label>
          <Textarea
            {...register("body")}
            className="border border-black/60 w-full p-4 text-xl h-40 text-black"
            placeholder="Enter your post description (minimum 20 characters)"
          />
          {errors.body && (
            <p className="text-red-500 text-sm">{errors.body.message}</p>
          )}
        </div>
        {/* Post-Tags */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-2xl text-black font-bold">Tags</label>
          <Input
            onChange={(e) => setTagsInput(e.target.value)}
            className="border border-black/60 w-full h-[6.5vh] p-4 text-xl text-black"
            placeholder="Enter post tags e.g. fictional, fantasy, sci-fi"
          />
        </div>
        {/* Post-Reactions */}
        <div className="flex justify-around items-center gap-4 w-full">
          {/* Post-Likes */}
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-2xl text-black font-bold">Likes</label>
            <Input
              {...register("reactions.likes", { valueAsNumber: true })}
              className="border border-black/60 w-full h-[6.5vh] p-4 text-xl text-black"
              placeholder="Enter post likes"
              type="number"
            />
          </div>
          {/* Post-Dislikes */}
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-2xl text-black font-bold">Dislikes</label>
            <Input
              {...register("reactions.dislikes", { valueAsNumber: true })}
              className="border border-black/60 w-full h-[6.5vh] p-4 text-xl text-black"
              placeholder="Enter post likes"
              type="number"
            />
          </div>
        </div>
        {/* Post-Views */}
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <label className="text-2xl text-black font-bold">Views</label>
          <Input
            {...register("views", { valueAsNumber: true })}
            className="border border-black/60 w-full h-[6.5vh] p-4 text-xl text-black"
            placeholder="Enter post views"
            type="number"
          />
        </div>
        {/* Submit CTA */}
        <button
          type="submit"
          className="w-full flex justify-center items-center bg-black rounded-xl h-[7.5vh] hover:cursor-pointer"
        >
          {isSubmitting ? (
            <ImSpinner8 className="w-4 h-4 animate-spin text-white" />
          ) : (
            <span className="text-white text-lg font-semibold">
              Create new post
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
