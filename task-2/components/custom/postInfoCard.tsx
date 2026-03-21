//Imports
import { postData } from "@/types";
import { Eye, Heart, MessageCircle } from "lucide-react";
//Type
type postProp = {
  post: postData;
};
const PostInfoCard = ({ post }: postProp) => {
  return (
    <div className="rounded-2xl backdrop-blur-md bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 hover:shadow-md hover:shadow-blue-500/5 group cursor-pointer overflow-hidden">
      {/* Post Header */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
          {post.title}
        </h3>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag: string, idx: number) => (
              <span
                key={idx}
                className="inline-block px-2.5 py-1 text-xs font-semibold bg-blue-50 border border-blue-200 rounded-full text-blue-600"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Post Body */}
      <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">
        {post.body}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4"></div>

      {/* Post Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          {/* Likes */}
          <div className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span className="font-semibold">{post.reactions.likes}</span>
          </div>

          {/* Dislikes */}
          <div className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="font-semibold">{post.reactions.dislikes}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
            <Eye className="w-4 h-4" />
            <span className="font-semibold">{post.views}</span>
          </div>
        </div>

        {/* Post ID */}
        <span className="text-xs text-gray-400 font-mono">#{post.id}</span>
      </div>
    </div>
  );
};

export default PostInfoCard;
