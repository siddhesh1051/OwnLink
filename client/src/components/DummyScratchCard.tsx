import React, { useEffect, useState } from "react";
import Image from "next/image";
import Coin from "@/assets/Coin.svg";

interface DummyScratchCardProps {
  cardId: number;
  handleClick: any;
  handleDrag: any;
}

const DummyScratchCard: React.FC<DummyScratchCardProps> = ({
  cardId,
  handleClick,
  handleDrag,
}) => {
  const width = 250;
  const height = 250;
  const [scratchCardNumber, setScratchCardNumber] = useState<number | null>(
    null
  );

  useEffect(() => {
    // Generate the random reward value only on the client side
    const randomValue = Math.floor(Math.random() * 100);
    setScratchCardNumber(randomValue);
  }, []);

  return (
    <div
      onClick={handleClick}
      onDrag={handleDrag}
      className="flex justify-center items-center h-full w-full"
    >
      <div
        className={`rounded-[1.8rem] overflow-hidden border-2 border-graphite relative`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-bold text-green-600 flex flex-col justify-center items-center">
            🎉 You Won! 🎉
            {scratchCardNumber !== null && (
              <div className="text-2xl font-semibold text-yellow-500 mt-2 flex gap-2">
                {scratchCardNumber}
                <Image src={Coin} width={25} height={25} alt="coin" />
              </div>
            )}
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOu0P2xzu_b6AVMLdy_ar6BGIuDs38GTI1T9ivDvzXMgYgxSi2vcp_yaF_EfnMWHqRzs&usqp=CAU"
          alt="scratch overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default DummyScratchCard;
