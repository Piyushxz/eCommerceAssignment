import {motion} from "motion/react"
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchKeyword, toggleFilterModal } from "@/features/todoSlice";

export const Search = () => {

    const dispatch = useDispatch()

  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay:0.4,duration:0.4, ease: "easeInOut" }}
    className="w-full pt-24 pb-8 ">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="font-semibold font-primary tracking-tighter text-lg text-black">Home</h1>
        <div className="flex gap-2 items-center">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          <input onChange={(e)=>dispatch(setSearchKeyword(e.target.value))}
            className=" focus:outline-none focus:ring-1 focus:ring-black transition-all text-black font-primary tracking-tight py-3 pl-10 pr-4 flex rounded-lg items-center w-70 md:w-80 border border-black/15 focus:outline-none"
            placeholder="Search Anything"
          />
        </div>
        <button onClick={()=>dispatch(toggleFilterModal())}
         className="hover:opacity-70 p-1 rounded-lg border border-black/15">
            <SlidersHorizontalIcon className="text-black size-8"/>
        </button>
        </div>

      </div>
    </motion.div>
  );
};
