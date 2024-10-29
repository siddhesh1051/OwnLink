"use client";

import { CheckIcon, ChevronRight, CopyIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";
import Avatar_placeholder from "@/assets/avatar_placeholder.png";
import Image from "next/image";

export default function Creatorcard({
  name,
  avatar,
  username,
}: {
  name: string;
  avatar: string;
  username: string;
}) {
  const [isCopying, setIsCopying] = useState(false);

  const copyOwnlink = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(`https://ownlink.me/${username}`);
    toast.success("Ownlink copied to clipboard");
    setTimeout(() => {
      setIsCopying(false);
    }, 1500);
  };

  return (
    <div className="flex justify-between items-center px-2 py-1 rounded-lg duration-300">
      <div className="flex gap-3 items-center justify-center">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>
            <Image src={Avatar_placeholder} alt="avatar" />
          </AvatarFallback>
        </Avatar>

        <div className="font-medium text-lg">{name}</div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="p-4 flex justify-center items-center rounded-full bg-graphite text-neutral-400 cursor-pointer"
                onClick={copyOwnlink}
              >
                {isCopying ? (
                  <CheckIcon size={22} className="text-green-600" />
                ) : (
                  <CopyIcon size={22} />
                )}
              </div>
            </TooltipTrigger>{" "}
            <TooltipContent>
              <p>Copy Ownlink</p>
            </TooltipContent>
          </Tooltip>

          <Link href={`/creator/${username}`}>
            <Tooltip>
              <TooltipTrigger>
                <div className="p-4 flex justify-center items-center rounded-full bg-graphite text-neutral-400 cursor-pointer">
                  <ChevronRight size={22} />
                </div>
              </TooltipTrigger>{" "}
              <TooltipContent>
                <p>View Details</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        </TooltipProvider>
      </div>
    </div>
  );
}
