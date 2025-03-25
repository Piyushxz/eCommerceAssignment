import { toggleFilterModal } from "@/features/todoSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Slider } from "./ui/slider";

export const FilterModal = () => {
  const dispatch = useDispatch();

  return (
    <div

      onClick={() => dispatch(toggleFilterModal(false))} 
      className="fixed inset-0 flex justify-center  bg-black/50 z-50"
    >
      <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity:0, y: -20 }} 
            transition={{ type: "spring", stiffness: 200, bounce: 0.3, mass: 0.1, duration: 0.8 }}
        onClick={(e) => e.stopPropagation()} 
        className="w-80 h-76 rounded-lg bg-white mt-[150px] font-primary tracking-tight"
      >

        <h1 className="font-semibold p-3 text-2xl">Filter</h1>

        <div className="flex flex-col gap-4 p-4 ">
            <div className="flex flex-col gap-2">
            <h1 className="font-semibold  text-xl">Price</h1>
            <Slider className="w-[90%]" defaultValue={[33]} max={100} step={1} />



            </div>
            <div className="flex flex-col gap-3">
            <h1 className="font-semibold  text-xl">Category</h1>
            <div className="flex flex-wrap gap-2">
            <div className="rounded-lg ">
                    <span className="py-3 px-4 rounded-lg border text-black/50 bg-gray-200 font-semibold" >
                    Clothes

                    </span>
                </div>
                <div className="rounded-lg ">
                    <span className="py-3 px-4 rounded-lg border text-black/50 bg-gray-200 font-semibold" >
                    Electronics

                    </span>
                </div>
                <div className="rounded-lg ">
                    <span className="py-3 px-4 rounded-lg border text-black/50 bg-gray-200 font-semibold" >
                    Toys

                    </span>
                </div>
            </div>

            </div>
            
            <div className="flex justify-between  pt-8">
              <button className="bg-white py-2 px-6 font-semibold text-sm border rounded-lg">Clear All</button>
              <button className="bg-black text-white py-2 px-6 font-semibold text-sm border rounded-lg">Apply</button>


            </div>
        </div>
      </motion.div> 
    </div>
  );
};
