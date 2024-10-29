import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Coin from "@/assets/Coin.svg";

interface ScratchCardProps {
  cardId: number;
  handleAutoScratch: any;
}

interface RewardResponse {
  data: {
    rewardValue: number;
  };
}

const CustomScratchCard: React.FC<ScratchCardProps> = ({
  cardId,
  handleAutoScratch,
}) => {
  const width = 250;
  const height = 250;
  const brushSize = 40;
  const finishPercent = 60;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isMouseInCanvas, setIsMouseInCanvas] = useState<boolean>(false);
  const [scratchedPercent, setScratchedPercent] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [scratchCardNumber, setScratchCardNumber] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const img = imageRef.current;

    if (context && img) {
      img.crossOrigin = "anonymous";
      img.onload = () => {
        context.drawImage(img, 0, 0, width, height);
        context.globalCompositeOperation = "destination-out";
      };
    }
  }, []);

  const revealFull = (): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.clearRect(0, 0, width, height);
    }
  };

  const handleScratchComplete = async (): Promise<void> => {
    if (!revealed) {
      setRevealed(true);
      revealFull();
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/rewards/getscratchcardreward`
        );
        const data: RewardResponse = await response.json();
        setScratchCardNumber(data?.data?.rewardValue);
      } catch (error) {
        console.error("Failed to fetch reward value:", error);
      }
    }
  };

  const calculateScratchedPercent = useCallback((): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      const pixels = context.getImageData(0, 0, width, height).data;
      const totalPixels = width * height;
      let scratchedPixels = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] === 0) {
          scratchedPixels++;
        }
      }

      const newPercent = (scratchedPixels / totalPixels) * 100;
      setScratchedPercent(newPercent);

      if (newPercent >= finishPercent) {
        handleScratchComplete();
      }
    }
  }, [revealed]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if (!revealed) {
      setIsMouseDown(true);
      setIsMouseInCanvas(true);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    setIsMouseInCanvas(true);
    if (e.buttons === 1 && !revealed) {
      setIsMouseDown(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    setIsMouseInCanvas(false);
    calculateScratchedPercent();
  };

  const handleMouseUp = useCallback((): void => {
    if (isMouseDown && !revealed) {
      setIsMouseDown(false);
      calculateScratchedPercent();
    }
  }, [isMouseDown, calculateScratchedPercent, revealed]);

  const scratch = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if ((!isMouseDown && !e.buttons) || revealed) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const rect = canvas?.getBoundingClientRect();

    if (context && rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      context.beginPath();
      context.arc(x, y, brushSize, 0, Math.PI * 2, true);
      context.fill();
      calculateScratchedPercent();
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div
        className={`rounded-[1.8rem] overflow-hidden border border-gray-800 shadow-xl relative`}
        style={{ width, height, userSelect: "none" }} // Prevent text selection
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {revealed ? (
            <div className="text-2xl font-bold text-green-600 flex flex-col justify-center items-center">
              🎉 You Won! 🎉
              {scratchCardNumber !== null ? (
                <div className="text-2xl font-semibold text-yellow-500 mt-2 flex gap-2">
                  {scratchCardNumber}
                  <Image src={Coin} width={25} height={25} alt="coin" />
                </div>
              ) : (
                <div className="text-xl text-gray-500 mt-2">
                  Loading reward...
                </div>
              )}
            </div>
          ) : (
            <div className="text-xl text-gray-500">Scratch to Win</div>
          )}
        </div>
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          onMouseDown={handleMouseDown}
          onMouseMove={scratch}
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative z-10 ${
            revealed ? "pointer-events-none" : "cursor-pointer"
          }`}
          style={{ userSelect: "none" }}
        />
        <img
          ref={imageRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOu0P2xzu_b6AVMLdy_ar6BGIuDs38GTI1T9ivDvzXMgYgxSi2vcp_yaF_EfnMWHqRzs&usqp=CAU"
          alt="scratch overlay"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default CustomScratchCard;
