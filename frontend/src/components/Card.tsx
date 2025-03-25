import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart, openModal, showDescriptionModal } from "../features/todoSlice";

export const Card = (props: {
    img: string;
    name: string;
    cost: string;
    category: string;
    id: string;
}) => {
    const dispatch = useDispatch();

    return (
        <div className="relative font-primary tracking-tighter w-80 h-80 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105 bg-background h-[400px]">
            <div onClick={() => dispatch(showDescriptionModal({ id: props.id }))}>
                <img className="w-full h-60 object-cover rounded-t-lg" src={props.img} alt="Product" />
                <div className="flex flex-col justify-between h-full p-4">
                    <div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-base font-manrope tracking-tighter">{props.name}</span>
                        </div>
                        <p className="text-sm font-normal py-1 truncate font-manrope">{props.category}</p>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                        <span className="font-bold font-manrope tracking-tighter">${props.cost}</span>
                    </p>
                </div>
            </div>
            <button
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none"
                onClick={() => {
                    dispatch(openModal(true));
                    dispatch(addToCart({ props }));
                }}
            >
                <Plus className="text-black size-6" />
            </button>
        </div>
    );
};
