import { setFilterCategory, setFilterPrice, toggleFilterModal } from "@/features/todoSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "./ui/slider";

export const FilterModal = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);

  console.log(filterCategory)

  return (
    <div
      onClick={() => dispatch(toggleFilterModal(false))}
      className="fixed inset-0 flex  justify-center bg-black/50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: "spring", stiffness: 200, bounce: 0.3, mass: 0.1, duration: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        className="w-80 p-6 rounded-lg h-70 mt-[100px] bg-white shadow-lg font-primary tracking-tight"
      >
        <h1 className="font-semibold text-2xl mb-4">Filter</h1>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Price</h2>
          <Slider onValueChange={(value) => dispatch(setFilterPrice(value[0]))}
           className="w-full" defaultValue={[33]} max={100} step={1} />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <h2 className="font-semibold text-lg">Category</h2>
          <div className="flex flex-wrap gap-2">
            <div
              onClick={() => dispatch(setFilterCategory({category:"clothes"}))}
              className="rounded-lg cursor-pointer transition-all duration-300"
            >
              <span
                className={`py-2 px-4 rounded-lg border font-semibold text-sm ${
                  filterCategory === "clothes"
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-black/50 hover:bg-gray-300"
                }`}
              >
                Clothes
              </span>
            </div>
            <div
              onClick={() => dispatch(setFilterCategory({category:"electronics"}))}
              className="rounded-lg cursor-pointer transition-all duration-300"
            >
              <span
                className={`py-2 px-4 rounded-lg border font-semibold text-sm ${
                  filterCategory === "electronics"
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-black/50 hover:bg-gray-300"
                }`}
              >
                Electronics
              </span>
            </div>
            <div
              onClick={() => dispatch(setFilterCategory({category:"toys"}))}
              className="rounded-lg cursor-pointer transition-all duration-300"
            >
              <span
                className={`py-2 px-4 rounded-lg border font-semibold text-sm ${
                  filterCategory === "toys"
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-black/50 hover:bg-gray-300"
                }`}
              >
                Toys
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button className="bg-white py-2 px-6 font-semibold text-sm border rounded-lg hover:bg-gray-100">
            Clear All
          </button>
          <button className="bg-black text-white py-2 px-6 font-semibold text-sm rounded-lg hover:bg-gray-900">
            Apply
          </button>
        </div>
      </motion.div>
    </div>
  );
};
