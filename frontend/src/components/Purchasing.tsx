import {  togglePurchaseModal } from "@/features/todoSlice";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const Purchase = () => {
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const dispatch = useDispatch()
  useEffect(() => {
    const timer = setTimeout(() =>{ setPurchaseCompleted(true)
        toast.success("Purchase completed")
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div onClick={()=> purchaseCompleted && dispatch(togglePurchaseModal())} className="font-primary tracking-tighter fixed z-50 inset-0 flex items-center justify-center bg-black/70">
      {purchaseCompleted ? (
        <div 
        className="text-center animate-fadeIn bg-white/80 px-6 py-4 rounded-lg shadow-lg">
          <h1 className="tracking-tight text-xl font-primary text-black">
            Purchase Successful!
          </h1>
          <h1 className="tracking-tight text-md font-primary text-black">
           Click anywhere to continue shopping
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 bg-white/80 px-6 py-4 rounded-lg shadow-lg">
          <OrbitProgress
            variant="track-disc"
            color="#000000"
            size="small"
            text=""
            textColor=""
          />
          <h1
            className="tracking-tight text-xl font-primary text-black"
            aria-live="polite"
          >
            Processing...
          </h1>
        </div>
      )}
    </div>
  );
};
