import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import axios from "axios";
import { closeDescriptionModal } from "@/features/todoSlice";
export const DescriptionModal = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.showDescriptionModal.id);
    const isDescriptionModalOpen = useSelector(state => state.showDescriptionModal.value);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error("Error fetching product data:", error));
        }
    }, [id]);

    if (!isDescriptionModalOpen || !product) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}  
            exit={{ opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            onClick={() => dispatch(toggleDescriptionModal(false))}
        >
            <div 
                className="w-96 font-primary bg-[#121212] border border-gray-700 shadow-2xl rounded-xl p-5 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top-3 right-3 text-gray-300 hover:text-white p-2 rounded-full transition duration-200 bg-gray-800 hover:bg-gray-700"
                    onClick={() => dispatch(closeDescriptionModal(false))}
                >
                    <X size={22} />
                </button>

                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" 
                />

                <h2 className="text-white text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>

                <div className="mt-4 flex justify-between items-center">
                    <div className="text-white font-bold text-lg">${product.price}</div>

                </div>
            </div>
        </motion.div>
    );
};
