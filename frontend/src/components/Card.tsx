
import { Plus } from "lucide-react"
import { useDispatch } from "react-redux"
import { addToCart, openModal } from "../features/todoSlice"
export const Card = (props:{
    img:string,
    name:string,
    cost:string,
    category:string,
    id:string
})=>{

    const dispatch = useDispatch()

    return(
                        <div className="w-[200px] h-[200px] border border-black/15 relative">
                <img 
                src={props.img}
                alt="Product" 
                className="w-full h-full object-cover rounded-lg"
                />

                <div onClick={()=>{dispatch(openModal(true))

                    dispatch(addToCart({props}))
                }}
                className="absolute top-2 right-2 rounded-lg border border-black/15 cursor-pointer ">
                <Plus className="text-black size-6" />
                </div>

                <div className="absolute bottom-2 left-2 font-primary tracking-tight border rounded-2xl bg-white text-sm text-black py-1 px-2">
                {props.category}
                </div>
                <div className='flex justify-between font-primary'>
                    <h1 className='tracking-tight text-md'>{props.name}</h1>
                    <h1 className='tracking-tight text-md'>${props.cost}</h1>
                </div>
                </div>
    )
}