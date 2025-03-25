import { EyeIcon, HomeIcon, LogOut, ShoppingCartIcon } from "lucide-react"
import {motion} from "motion/react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./DropDownMenu"

export const DashboardNavbar = ()=>{
    return(
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:0.4, ease: "easeInOut" }}
        className="w-full fixed  flex justify-center items-center border-b bg-white border-gray-400/30 z-49  py-4"
      >
        <div className="w-[95vw] flex justify-between items-center">

            <div className="flex font-primary gap-6 items-center justify-center">
                <h1 className="font-bold tracking-tighter text-lg">Shopi</h1>
                <h1 className=" tracking-tight text-sm">All</h1>
                <h1 className=" tracking-tight text-sm">Clothes</h1>
                <h1 className=" tracking-tight text-sm">Electronics</h1>
                <h1 className=" tracking-tight text-sm">Toys</h1>





            </div>
            <div className="flex font-primary gap-6 items-center hidden md:flex">
                <h1 className=" tracking-tight text-sm">user@gmail.com</h1>
                <h1 className=" tracking-tight text-sm">My Orders</h1>
                <h1 className=" tracking-tight text-sm">My Account</h1>
                <div className=" tracking-tight text-sm"><ShoppingCartIcon className="text-black size-5" /></div>





            </div>

            <div className="flex md:hidden">
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
        <DropdownMenuContent className="bg-[#191919] border-gray-600/40 z-100">
        <DropdownMenuItem 
     
         className="w-full flex gap-2  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <HomeIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Home</span>
                    
          </DropdownMenuItem>
                <DropdownMenuItem 
                 className="w-full flex gap-2 w-full  rounded-sm px-2 py-1.5 text-md outline-none text-white  transition-colors  hover:bg-gray-800 rounded-lg transition-all ease-in-out cursor-pointer">
                            <EyeIcon className="size-6 text-inherit"/>
                            <span className="font-primary font-normal text-md  tracking-tighter text-inherit ">Favourite</span>
                    
                </DropdownMenuItem>
                <DropdownMenuSeparator
                 className="bg-gray-600/30" />
                <DropdownMenuItem  
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