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
    <div className="w-full backdrop-blur-md bg-white/80 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-[14vh] flex justify-start items-center gap-x-6">
        {/* Back Navigation Button */}
        {!home ? (
          <button
            onClick={() => router.push("/")}
            className="group relative shrink-0 w-11 h-11 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex justify-center items-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-500 transition-colors duration-300 hover:cursor-pointer" />
          </button>
        ) : (
          <div className="w-11 shrink-0"></div>
        )}
        {/* Title */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
