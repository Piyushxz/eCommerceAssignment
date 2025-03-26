import { useEffect, useState } from "react"
import {OrbitProgress} from "react-loading-indicators"
export const Purchase = ()=>{

    const [purchaseCompleted,setPurchaseCompleted] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{setPurchaseCompleted(true)},5000)
    },[])
    return(
        <div className="w-screen h-full bg-black/50 flex justify-center items-center">

            {
                purchaseCompleted ?
                <div className="">
                    <h1 className="tracking-tight text-xl font-primary">Purchase Successful</h1>

                </div>
                :
                <div className="flex flex-col gap-2">
                    <OrbitProgress variant="track-disc" color="#101a10" size="medium" text="" textColor="" />
                    <h1 className="tracking-tight text-xl font-primary">Processing</h1>
                </div>
            }
        </div>
    )
}