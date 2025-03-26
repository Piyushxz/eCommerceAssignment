import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="font-primary py-2 border-b border-white/15 md:border-none   fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center  bg-black backdrop-blur md:border md:border-white/15 p-3 rounded-lg max-w-5xl mx-auto b  ">
          <div className="p-1.5 rounded-lg border border-white/15">

            <h1 className="tracking-tighter font-semibold text-white ">xShopify</h1>
          </div>



          <div className="flex gap-4 items-center">
            <MenuIcon className="size-8 text-white md:hidden" />
            <button className="font-satoshi text-white tracking-tighter text-sm border border-white/15 rounded-lg px-5 py-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};