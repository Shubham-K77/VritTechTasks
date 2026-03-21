"use client";
//Imports:
import { userData } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
//Props:
type userProps = {
  data: userData;
};
//Component:
const UserProfileCard = ({ data }: userProps) => {
  const router = useRouter();
  return (
    <div
      className="group relative w-full h-auto transition-all ease-out duration-300 backdrop-blur-md bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={() => router.push(`/users/${data.id}`)}
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Header Section */}
        <div className="space-y-4 mb-6">
          {/* Avatar */}
          <div className="flex justify-start">
            <div
              className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 shrink-0 ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${data.avatar})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          {/* Name */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-tight">
              {data.firstName} {data.lastName}
            </h3>
          </div>

          {/* Company Name */}
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              {data.companyName}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4"></div>

        {/* Info Section */}
        <div className="space-y-2 mb-6">
          {/* Email */}
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-200 mt-1 shrink-0"></div>
            <p className="text-sm text-gray-600 break-all leading-relaxed">
              {data.email}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full h-11 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 text-blue-600 font-semibold text-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-md hover:cursor-pointer">
          <span>View Posts</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
