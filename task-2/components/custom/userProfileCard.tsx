//Imports:
import { userData } from "@/types";
import { ArrowRight } from "lucide-react";

type userProps = {
  data: userData;
};

const UserProfileCard = ({ data }: userProps) => {
  return (
    <div className="group relative w-full h-auto transition-all ease-out duration-300 backdrop-blur-md bg-white/8 border border-white/15 hover:border-white/30 hover:bg-white/12 rounded-2xl p-6 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 cursor-pointer overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Header Section */}
        <div className="space-y-4 mb-6">
          {/* Avatar */}
          <div className="flex justify-start">
            <div
              className="w-14 h-14 rounded-xl bg-linear-to-br from-green-400 to-emerald-600 shrink-0 ring-2 ring-white/20 group-hover:ring-green-400/50 transition-all duration-300 overflow-hidden"
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
            <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
              {data.firstName} {data.lastName}
            </h3>
          </div>

          {/* Company Name */}
          <div className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <span className="text-xs font-semibold text-green-300 uppercase tracking-wide">
              {data.companyName}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-4"></div>

        {/* Info Section */}
        <div className="space-y-2 mb-6">
          {/* Email */}
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500/40 mt-1 shrink-0"></div>
            <p className="text-sm text-white/70 break-all leading-relaxed">
              {data.email}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full h-11 rounded-lg bg-linear-to-r from-green-500/40 to-emerald-500/40 hover:from-green-500/60 hover:to-emerald-500/60 border border-green-400/50 hover:border-green-300/80 text-white font-semibold text-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-green-500/20 hover:cursor-pointer">
          <span>View Posts</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
