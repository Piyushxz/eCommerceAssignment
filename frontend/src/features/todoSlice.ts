import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isCheckoutModalOpen:false,
    cartItems:[]

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action) => {

            state.isCheckoutModalOpen = !state.isCheckoutModalOpen
        },
        openModal :(state,action)=>{
            state.isCheckoutModalOpen = true
        },
        addToCart : (state,action)=>{
            state.cartItems.push(action.payload)
        }


    }
} )

export const {toggleModal,openModal,addToCart} = modalSlice.actions

export default modalSlice.reducer