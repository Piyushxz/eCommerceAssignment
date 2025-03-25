import { createSlice } from "@reduxjs/toolkit";


export interface filterCategoryType  {
    category : 'clothes' | 'electronic' | 'toys'| 'all'
}
const initialState ={
    isCheckoutModalOpen:false,
    cartItems:[],
    filterCategory:'all',
    showDescriptionModal:{value:false,id:1},
    isFilterModalOpen:false

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
        },
        filterCard:(state,action)=>{
            state.cartItems = state.cartItems.filter((item)=>item.props.id !== action.payload.id)
        },
        setFilterCategory:(state,action)=>{
            state.filterCategory = action.payload.category
        },
        showDescriptionModal:(state,action)=>{
            state.showDescriptionModal.value = true;
            state.showDescriptionModal.id = action.payload.id
        },
        closeDescriptionModal:(state,action)=>{
            state.showDescriptionModal.value = false;
            state.showDescriptionModal.id = 0
        },
        toggleFilterModal:(state,action)=>{
            state.isFilterModalOpen = !state.isFilterModalOpen
        }


    }
} )

export const {toggleModal,openModal,addToCart,filterCard,setFilterCategory,showDescriptionModal,closeDescriptionModal,toggleFilterModal} = modalSlice.actions

export default modalSlice.reducer