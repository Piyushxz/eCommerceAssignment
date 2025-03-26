import {  Info, ShoppingCartIcon} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, openModal, showDescriptionModal } from "../features/todoSlice";
import { toast } from "sonner";

export const Card = (props: {
    img: string;
    name: string;
    cost: string;
    category: string;
    id: string;
}) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartItems);

    return (
        <div className="relative font-primary tracking-tighter w-80 h-auto rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 bg-background h-[400px]">
            <div onClick={() => dispatch(showDescriptionModal({ id: props.id }))}>
                <img className="w-full h-60 object-cover rounded-t-lg cursor-pointer" src={props.img} alt="Product" />
                <div className="flex flex-col justify-between h-full p-4">
                    <div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-base text-md font-manrope tracking-tighter">{props.name}</span>
                        </div>
                        <p className="text-sm font-normal py-1 truncate font-manrope">{props.category}</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                        <span className="font-bold font-manrope tracking-tighter">${props.cost}</span>
                    </p>
                </div>
            </div>
            {/* <button
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none"
            onClick={() => {
                dispatch(openModal(true));

                const isProductInCart = items.some((element) => element.props.id === props.id);

                if (isProductInCart) {
                    toast.error("Product already exists in cart!");
                } else {
                    dispatch(addToCart({ props }));
                }
            }}
        >
            <Plus className="text-black size-6" />
        </button> */}

        
        <div className="flex gap-2 mx-4 pb-2">
        <button
            className="cursor-pointer  py-2 px-4 bg-yellow-400 flex items-center gap-2 rounded-lg shadow-md focus:outline-none"
            onClick={() => {
                dispatch(openModal(true));

                const isProductInCart = items.some((element) => element.props.id === props.id);

                if (isProductInCart) {
                    toast.error("Product already exists in cart!");
                } else {
                    dispatch(addToCart({ props }));
                }
            }}
        >
            <ShoppingCartIcon className="text-white size-4" />
            <span className="text-white tracking-tight text-sm">Add to cart</span>
        </button>

        <button
            className="cursor-pointer  py-2 px-4 bg-black flex items-center gap-2 rounded-lg shadow-md focus:outline-none"
            onClick={() => dispatch(showDescriptionModal({ id: props.id }))}
        >
            <Info className="text-white size-4" />
            <span className="text-white tracking-tight text-sm">View Details</span>
        </button>
        </div>


        </div>
    );
};
