import Image from "next/image";
import { cardInfo } from "@/constant";

type CardKey = keyof typeof cardInfo;

const DisplayCard = ({ cardKey }: { cardKey: CardKey }) => {
  const card = cardInfo[cardKey];
  const Badge = (
    <span className="inline-flex items-center bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-2 w-fit">
      {card.category}
    </span>
  );
  const desktopText = (
    <div className="flex flex-col gap-y-2">
      {Badge}
      <div className="text-white text-xl font-bold">{card.title}</div>
      <div className="text-sm text-white/95 font-semibold">{card.sub}</div>
      <div className="text-white text-[0.75rem] leading-relaxed text-justify">
        {card.text}
      </div>
    </div>
  );
  const mobileText = (
    <div className="flex flex-col gap-y-2 text-center items-center px-2">
      {Badge}
      <div className="text-white text-2xl font-bold">{card.title}</div>
      <div className="text-base text-white/95 font-semibold">{card.sub}</div>
      <div className="text-white text-sm leading-relaxed text-justify">
        {card.text}
      </div>
    </div>
  );
  return (
    <div
      className="w-full rounded-xl relative overflow-hidden group cursor-pointer
                 hover:shadow-md hover:shadow-black/20
                 transition-shadow duration-500"
      style={{ backgroundColor: card.bg, minHeight: "300px" }}
    >
      {/* Mobile */}
      <div className="flex flex-col items-center gap-y-4 p-4 lg:hidden">
        <div className="relative w-[70%] h-50 overflow-hidden rounded-lg">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-contain object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {mobileText}
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-5 lg:h-[48vh]">
        {card.direction === "left" ? (
          <>
            <div className="col-span-2 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[130%] transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-col justify-center pl-2 pr-6 py-6">
              {desktopText}
            </div>
          </>
        ) : (
          <>
            <div className="col-span-3 flex flex-col justify-center pl-6 pr-2 py-6">
              {desktopText}
            </div>
            <div className="col-span-2 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-full h-[130%] transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
