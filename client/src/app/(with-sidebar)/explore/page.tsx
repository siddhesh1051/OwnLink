"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Creatorcard from "@/components/Creatorcard";
import { LucideSearch } from "lucide-react";
import {
  useGetAllCreatorsQuery,
  useGetFeaturedCreatorsQuery,
} from "@/redux/api/creatorApi";

export default function Home() {
  const [searchresults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { data: creatorsData } = useGetAllCreatorsQuery();

  useEffect(() => {
    const results = creatorsData?.data?.creators?.filter((creator: any) =>
      creator.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  }, [searchInput, creatorsData]);

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
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>

        {searchresults?.length !== 0 ? (
          <div>
            <div className="flex flex-col gap-4 mt-4">
              {searchresults?.map((creator: any, index: number) => (
                <Creatorcard
                  key={index}
                  name={creator.name}
                  avatar={creator.avatar}
                  username={creator.username}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full text-iron h-full flex justify-center items-center mt-10 text-xl text-semibold">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}
