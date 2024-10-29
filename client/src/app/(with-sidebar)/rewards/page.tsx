"use client";

import Image from "next/image";
import Coin from "@/assets/Coin.svg";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import RewardCard from "@/components/RewardCard";
import CustomScratchCard from "@/components/CustomScratchCard";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import DummyScratchCard from "@/components/DummyScratchCard";

export default function Rewards() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const openCardModal = (cardId: number) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleAutoScratch = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full py-3 px-4">
      <div className="flex justify-center items-center gap-4">
        <div className="w-1/4 flex flex-col gap-2 items-center justify-start bg-gradient-to-br from-[#2E096E] to-[#7E4B95] h-full rounded-xl px-8 py-6">
          <div className="flex gap-2 flex-col justify-center items-start w-full">
            <h1 className="text-snow/80 text-lg font-medium">Reward Points</h1>
            <div className="flex gap-2 justify-center items-center">
              <h1 className="text-snow text-4xl font-bold">720</h1>
              <div>
                <Image src={Coin} width={50} height={50} alt="coin" />
              </div>
            </div>
          </div>
          <Separator className="bg-[#674182] my-2 rounded-full" />
          <div className="flex gap-1 justify-start items-center w-full cursor-pointer hover:gap-2 duration-200">
            <span className="text-snow/90 font-semibold">Redeem</span>
            <span>
              <ArrowRight size={18} className="text-snow/90 font-semibold " />
            </span>
          </div>
        </div>
        {/* <div className="w-full bg-graphite rounded-xl p-4 h-full flex flex-col items-start justify-start gap-2">
          <div className="flex justify-between items-center gap-1 w-full text-steel font-semibold mb-1">
            <p>No.</p>
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
          </div>
          <div className="flex justify-between items-center gap-1 w-full">
            <p>1</p>
            <p>10/5/2001</p>
            <p>Debited for downloading certificate</p>
            <p className="text-tangerine">-10</p>
          </div>
          <div className="flex justify-between items-center gap-1 w-full">
            <p>2</p>
            <p>10/5/2001</p>
            <p>Credited for downloading certificate</p>
            <p className="text-meadow">+10</p>
          </div>
          <div className="flex justify-between items-center gap-1 w-full">
            <p>3</p>
            <p>10/5/2001</p>
            <p>Debited for downloading certificate</p>
            <p className="text-tangerine">-10</p>
          </div>
          <div className="flex gap-1 justify-end items-center w-full cursor-pointer duration-200 text-[#d0bcf1] font-semibold mt-1">
            <span>View More</span>
            <span>
              <ArrowRight size={18} />
            </span>
          </div>
        </div> */}
        <div className="w-full bg-graphite rounded-xl p-4 h-full">
          <table className="w-full">
            <thead className="text-steel font-semibold">
              <tr>
                <th className="text-left">No.</th>
                <th className="text-left">Date</th>
                <th className="text-left">Description</th>
                <th className="text-left">Amount</th>
              </tr>
            </thead>
            <tbody className="text-snow/80">
              <tr>
                <td>1</td>
                <td>10/5/2001</td>
                <td>Debited for downloading certificate</td>
                <td className="text-tangerine">-10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10/5/2001</td>
                <td>Credited for downloading certificate</td>
                <td className="text-meadow">+10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>10/5/2001</td>
                <td>Debited for downloading certificate</td>
                <td className="text-tangerine">-10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>10/5/2001</td>
                <td>Debited for downloading certificate</td>
                <td className="text-tangerine">-10</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-start items-center cursor-pointer duration-200 text-[#d0bcf1] font-semibold mt-2">
            <span>View More</span>
            <span>
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-2">
        <h1 className="text-xl font-bold text-snow">Scratch & Win</h1>
        <div className="w-full h-full grid md:grid-cols-5 grid-cols-1 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-start items-start">
              <div className="flex justify-center items-center w-full">
                <DummyScratchCard
                  cardId={index}
                  handleClick={() => openCardModal(index)}
                  handleDrag={() => openCardModal(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-2">
        <h1 className="text-xl font-bold text-snow">Rewards Shop</h1>
        <div className="w-full h-full grid md:grid-cols-4 grid-cols-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex justify-start items-start">
              <RewardCard />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Scratch To Win"
        cancelText="Cancel"
        submitText="Auto Scratch"
        isTitleCenter={true}
        isDescriptionCenter={true}
        isFooterCenter={true}
        isBorder={false}
        handleAutoScratch={handleAutoScratch}
        component={
          selectedCardId !== null ? (
            <CustomScratchCard
              cardId={selectedCardId}
              handleAutoScratch={handleAutoScratch}
            />
          ) : null
        }
      />
    </div>
  );
}
