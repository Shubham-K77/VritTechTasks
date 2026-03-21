import DisplayCard from "@/ui/displayCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-y-8">
      {/* Task-1 */}
      <div className="w-full lg:w-[85%] flex flex-col justify-start items-start gap-y-6 p-3 mt-8 lg:p-8">
        {/* Title Display */}
        <div className="w-full flex justify-start items-center">
          <span className="whitespace-nowrap text-2xl md:text-3xl">
            <span className="text-teal-700/80 font-semibold">Step </span>
            <span className="text-black/75 font-semibold">In. </span>
            <span className="text-teal-700/80 font-semibold">Skill </span>
            <span className="text-black/75 font-semibold">Up. </span>
            <span className="text-teal-700/80 font-semibold">Stand </span>
            <span className="text-black/75 font-semibold">Out. </span>
            <span>🚀</span>
          </span>
        </div>
        {/* Card Display */}
        <div className="w-full flex justify-center items-center overflow-visible">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 overflow-visible">
            <DisplayCard cardKey="card-1" />
            <DisplayCard cardKey="card-2" />
            <DisplayCard cardKey="card-3" />
            <DisplayCard cardKey="card-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
