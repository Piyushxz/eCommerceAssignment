import {  HomeIcon, LogOut, ShoppingCartIcon, User, Wallet2Icon } from "lucide-react"
import {motion} from "motion/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./DropDownMenu"
import { useDispatch, useSelector } from "react-redux"
import { openModal, setFilterCategory } from "@/features/todoSlice"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { RootState } from "@/store"

export const DashboardNavbar = ()=>{

    const navigate = useNavigate()
    const items = useSelector((state:RootState)=>state.modal.cartItems) ?? []


    const dispatch = useDispatch()
    const filterCategory = useSelector((state:RootState)=>state.modal.filterCategory)

    const user = auth.currentUser

    return(
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5, ease: "easeInOut" }}
        className="w-full fixed  flex justify-center items-center border-b bg-white border-gray-400/30 z-49  py-4"
      >
        <div className="w-[95vw] flex justify-between items-center">

            <div className="flex font-primary gap-6 items-center justify-center">
            <h1 onClick={()=>navigate('/dashboard')}
             className=" cursor-pointer font-bold tracking-tighter text-lg">xShopify</h1>
                                <h1
                                onClick={() => dispatch(setFilterCategory({ category: "all" }))}
                                className={`tracking-tight text-sm cursor-pointer pb-1 ${
                                    filterCategory === "all" ? "underline decoration-2" : ""
                                }`}
                                >
                                All
                                </h1>
                                <h1
                                onClick={() => dispatch(setFilterCategory({ category: "clothes" }))}
                                className={`tracking-tight text-sm cursor-pointer pb-1 ${
                                    filterCategory === "clothes" ? "underline decoration-2" : ""
                                }`}
                                >
                                Clothes
                                </h1>
                                <h1
                                onClick={() => dispatch(setFilterCategory({ category: "electronics" }))}
                                className={`tracking-tight text-sm cursor-pointer pb-1 ${
                                    filterCategory === "electronics" ? "underline decoration-2" : ""
                                }`}
                                >
                                Electronics
                                </h1>
                                <h1
                                onClick={() => dispatch(setFilterCategory({ category: "toys" }))}
                                className={`tracking-tight text-sm cursor-pointer pb-1 ${
                                    filterCategory === "toys" ? "underline decoration-2" : ""
                                }`}
                                >
                                Toys
                                </h1>







            </div>
            <div className="flex font-primary gap-6 items-center hidden md:flex">
                <p className=" cursor-pointer tracking-tight text-sm">{
                    user ? user.email : "user"
                    } </p>
                <p onClick={()=>navigate('/my-orders')}
                className="cursor-pointer tracking-tight text-sm">My Orders</p>
                <p onClick={()=>navigate('/my-account')}
                 className="cursor-pointer tracking-tight text-sm">My Account</p>
                <div onClick={()=>dispatch(openModal())}
                 className="relative tracking-tight text-sm">
                    <ShoppingCartIcon className="text-black size-6" aria-label="Shopping Cart" />
                   {items.length >0 && <span className="rounded-full bg-black absolute text-xs text-white px-1.5 top-3 left-4">{items.length}</span>}
                </div>
            </div>
            <div className="flex md:hidden">

               {/* { DropDown for mobile view} */}
            <DropdownMenu >
        <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-black/40 to-black/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user text-white size-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#191919] border-gray-600/40 z-100 w-[150px]">
        <DropdownMenuItem 
        onClick={()=>navigate('/my-account')}
                 className="w-full flex gap-2 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <User className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">My Account</span>
                    
                </DropdownMenuItem>

                <DropdownMenuItem 
                onClick={()=>navigate('/my-orders')}
                 className="w-full flex gap-2 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <Wallet2Icon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">My Orders</span>
                    
                </DropdownMenuItem>

                <DropdownMenuItem onClick={()=>dispatch(openModal())}
                 className="w-full flex gap-2 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <ShoppingCartIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Cart</span>
                    
                </DropdownMenuItem>
        <DropdownMenuItem 
     
         className="w-full flex gap-2  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <HomeIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Home</span>
                    
          </DropdownMenuItem>


                <DropdownMenuSeparator
                 className="bg-gray-600/30" />
                <DropdownMenuItem  onClick={()=>navigate("/")}
                 className="w-full flex gap-2 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white hover:text-red-600 transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <LogOut className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md tracking-tighter text-inherit ">Logout</span>
                    
                </DropdownMenuItem>
                </DropdownMenuContent>

        </DropdownMenu>
            </div>
        </div>

        </motion.div>
    )
}