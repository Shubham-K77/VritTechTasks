"use client";
import { ArrowLeft } from "lucide-react";
//Imports:
import { useRouter } from "next/navigation";

type NavigationBarProps = {
  home: boolean;
  title: string;
};

const NavigationBar = ({ home, title }: NavigationBarProps) => {
  const router = useRouter();
  return (
    <div className="w-full backdrop-blur-md bg-linear-to-r from-white/8 via-white/6 to-white/8 border-b border-white/15 hover:border-white/25 transition-colors duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-[16vh] flex justify-start items-center gap-x-6">
        {/* Back Navigation Button */}
        {!home ? (
          <button
            onClick={() => router.back()}
            className="group relative shrink-0 w-11 h-11 rounded-xl backdrop-blur-sm bg-white/8 border border-white/15 hover:border-white/30 hover:bg-white/12 flex justify-center items-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" />
          </button>
        ) : (
          <div className="w-11 shrink-0"></div>
        )}
        {/* Title */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
