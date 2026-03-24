/* eslint-disable react/no-unescaped-entities */
import DisplayCard from "@/ui/displayCard";
import { LuArrowRight } from "react-icons/lu";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-y-8">
      {/* Task-1 */}
      <div className="w-full lg:w-[85%] flex flex-col justify-start items-start gap-y-6 p-3 mt-8 lg:p-8">
        {/* Title Display */}
        <div className="w-full flex justify-center lg:justify-start items-center">
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
      {/* Task-2 */}
      <div className="w-full lg:w-[85%] flex flex-col justify-start items-center gap-4">
        {/* Text-Display */}
        <div className="w-full flex justify-center lg:justify-start items-center">
          <span className="whitespace-nowrap text-2xl md:text-3xl p-2">
            <span className="text-black/75 font-semibold mr-2">Dive Into</span>
            <span className="text-teal-700 font-semibold">
              What's Hot Right Now!
            </span>
            <span>🔥</span>
          </span>
        </div>
        {/* Cards-Display */}
        <div className="w-full flex flex-col justify-start items-center md:flex-col md:justify-start md:items-center lg:flex-row lg:justify-center lg:items-center gap-6 p-3 mb-4">
          {/* Main Card */}
          <div className="w-[98%] lg:w-1/2 flex flex-col justify-start items-center gap-6 rounded-2xl h-[68vh] lg:h-[58vh] bg-[#C33241] p-4 hover:cursor-pointer transition-all ease-in-out duration-500 hover:scale-105 hover:shadow-md">
            {/* View All Course */}
            <div className="w-full flex justify-end items-center p-2">
              <div className="text-md font-semibold text-white">
                View all Courses
              </div>
              <LuArrowRight className="w-4 h-4 text-white" />
            </div>
            {/* Images display */}
            <div className="w-full grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-4">
              {/* Image-1 */}
              <div
                className="w-full h-[16vh]"
                style={{
                  backgroundImage: `url(/Images/t2a1.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* Image-2 */}
              <div
                className="w-full h-[16vh]"
                style={{
                  backgroundImage: `url(/Images/t2a2.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* Image-3 */}
              <div
                className="w-full h-[16vh]"
                style={{
                  backgroundImage: `url(/Images/t2a3.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              {/* Image-4 */}
              <div
                className="w-full h-[16vh]"
                style={{
                  backgroundImage: `url(/Images/t2a4.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            {/* Courses Info */}
            <div className="w-full flex justify-center items-center gap-2">
              {/* Course Count */}
              <div className="text-8xl text-white font-bold">
                23<sup>+</sup>
              </div>
              {/* Additional Info */}
              <div className="flex flex-col justify-start items-start p-2 gap-3">
                <div className="text-2xl font-semibold text-white">
                  All Courses
                </div>
                <div className="text-lg text-white">
                  <p>courses you're powering</p>
                  <p>through right now.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Side-Cards */}
          <div className="w-[95%] lg:w-1/2 gap-4 flex flex-col justify-start items-center md:flex-row md:justify-around md:items-center lg:flex-row lg:justify-around lg:items-center">
            {/* Side-Card:1 */}
            <div className="w-full md:w-1/2 lg:w-1/2 rounded-lg h-[48vh] lg:h-[58vh] bg-[#F9EBEC] flex flex-col justify-center items-center gap-4">
              {/* Title Info */}
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:rotate-180 lg:[writing-mode:vertical-rl] p-2">
                {/* Upcoming Courses */}
                <div className="text-3xl font-semibold text-[#C33241] tex-center">
                  <p>Upcoming</p>
                  <p>Courses</p>
                </div>
                {/* Description */}
                <div className="text-md text-[#C33241]">
                  <p>exciting new courses</p>
                  <p>waiting to boost your skills.</p>
                </div>
              </div>
              {/* Number Info */}
              <div className="text-8xl text-[#C33241] font-bold">
                05<sup>+</sup>
              </div>
            </div>
            {/* Side-Card:2 */}
            <div className="w-full md:w-1/2 lg:w-1/2 rounded-lg h-[48vh] lg:h-[58vh] bg-[#F9EBEC] flex flex-col justify-center items-center gap-4">
              {/* Title Info */}
              <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:rotate-180 lg:[writing-mode:vertical-rl] ext-center p-2">
                {/* Ongoing Courses */}
                <div className="text-3xl font-semibold text-[#C33241]">
                  <p>Ongoing</p>
                  <p>Courses</p>
                </div>
                {/* Description */}
                <div className="text-md text-[#C33241]">
                  <p>currently happening - don't</p>
                  <p>miss out on the action!</p>
                </div>
              </div>
              {/* Number Info */}
              <div className="text-8xl text-[#C33241] font-bold">
                10<sup>+</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
