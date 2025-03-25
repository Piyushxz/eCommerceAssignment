import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isCheckoutModalOpen:false

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
        }


    }
} )

export const {toggleModal,openModal} = modalSlice.actions

export default modalSlice.reducer