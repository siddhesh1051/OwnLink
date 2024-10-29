"use client";

import { Input } from "@/components/ui/input";
import Creatorcard from "@/components/Creatorcard";
import { LucideSearch } from "lucide-react";
import {
  useGetAllCreatorsQuery,
  useGetFeaturedCreatorsQuery,
} from "@/redux/api/creatorApi";

export default function Home() {
  const { data: creatorsData } = useGetAllCreatorsQuery();
  const { data: featuredCreators } = useGetFeaturedCreatorsQuery();

  return (
    <div className="flex gap-2 w-full">
      <div className="flex flex-col gap-2 h-full w-full py-3 px-4">
        <div className="flex gap-2 relative justify-center items-center ">
          <LucideSearch size={20} className="absolute left-5 " />
          <Input
            type="text"
            placeholder="Search your favourite creator"
            height={20}
            className="pl-14 text-base"
          />
        </div>
        {featuredCreators?.data?.featured?.length !== 0 ? (
          <div>
            <h1 className="font-bold text-2xl mt-6">Featured Creators</h1>
            <div className="flex flex-col gap-4 mt-4">
              {featuredCreators?.data?.featured?.map(
                (featuredCreator: any, index: number) => (
                  <Creatorcard
                    key={index}
                    name={featuredCreator.name}
                    avatar={featuredCreator.avatar}
                    username={featuredCreator.username}
                  />
                )
              )}
            </div>
          </div>
        ) : null}

        {creatorsData?.data?.creators?.length !== 0 ? (
          <div>
            <h1 className="font-bold text-2xl mt-4">Popular Creators</h1>
            <div className="flex flex-col gap-4 mt-4">
              {creatorsData?.data?.creators
                ?.slice(0, 3)
                ?.map((creator: any, index: number) => (
                  <Creatorcard
                    key={index}
                    name={creator.name}
                    avatar={creator.avatar}
                    username={creator.username}
                  />
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
