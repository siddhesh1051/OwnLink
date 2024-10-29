"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TooltipProvider, Tooltip } from "@/components/ui/tooltip";

export default function CreatorCardSkeleton() {
  return (
    <div className="flex justify-between items-center px-2 py-1 rounded-lg duration-300">
      <div className="flex gap-3 items-center justify-center">
        <Avatar>
          <AvatarFallback>
            <Skeleton className="w-10 h-10 rounded-full" />
          </AvatarFallback>
        </Avatar>

        <Skeleton className="w-32 h-6 rounded-md" />
      </div>

      <div className="flex gap-2 items-center justify-center">
        <TooltipProvider>
          <Tooltip>
            <div className="p-4 flex justify-center items-center rounded-full bg-graphite text-neutral-400 cursor-pointer">
              <Skeleton className="w-6 h-6" />
            </div>
          </Tooltip>

          <Tooltip>
            <div className="p-4 flex justify-center items-center rounded-full bg-graphite text-neutral-400 cursor-pointer">
              <Skeleton className="w-6 h-6" />
            </div>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
