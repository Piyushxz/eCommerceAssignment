import { createSlice } from "@reduxjs/toolkit";


export interface filterCategoryType  {
    category : 'clothes' | 'electronic' | 'toys'| 'all'
}
const initialState ={
    isCheckoutModalOpen:false,
    cartItems:[],
    filterCategory:'all',
    showDescriptionModal:{value:false,id:1},
    isFilterModalOpen:false,
    searchKeyword:"",
    filterPrice:100,
    cartPrice:0

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
            state.cartPrice =  state.cartItems.reduce((total, item) => total + item.props.cost, 0);
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
        },
        setSearchKeyword:(state,action)=>{
            state.searchKeyword = action.payload
        },
        setFilterPrice:(state,action)=>{
            state.filterPrice = action.payload
        },
        totalCartPrice:(state,action)=>{
            state.cartPrice =  state.cartItems.reduce((total, item) => total + item.props.cost, 0);

        },
        updateCartPrice:(state,action)=>{
            state.cartPrice = state.cartPrice + action.payload
        }



    }
} )

export const {toggleModal,openModal,addToCart,filterCard,setFilterCategory,showDescriptionModal,closeDescriptionModal,toggleFilterModal,setSearchKeyword,setFilterPrice,updateCartPrice} = modalSlice.actions

export default modalSlice.reducer