import {motion} from "motion/react"
import { SearchIcon } from "lucide-react";

export const Search = () => {


  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay:0.4,duration:0.4, ease: "easeInOut" }}
    className="w-full pt-24 pb-8">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="font-semibold font-primary tracking-tighter text-lg text-black">Home</h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          <input
            className=" focus:outline-none focus:ring-1 focus:ring-black transition-all text-black font-primary tracking-tight py-3 pl-10 pr-4 flex rounded-lg items-center w-80 border border-black/15 focus:outline-none"
            placeholder="Search Anything"
          />
        </div>
      </div>
    </motion.div>
  );
};
