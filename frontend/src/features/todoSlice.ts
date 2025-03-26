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
    cartPrice:0,
    isPurchaseModalOpen:false

}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state) => {

            state.isCheckoutModalOpen = !state.isCheckoutModalOpen
        },
        openModal :(state)=>{
            state.isCheckoutModalOpen = true
        },
        addToCart : (state,action)=>{
            //@ts-ignore
            state.cartItems.push(action.payload)
            //@ts-ignore
            state.cartPrice =  state.cartItems.reduce((total, item) => total + item.props.cost, 0); 
        },
        filterCard:(state,action)=>{
        //@ts-ignore

            state.cartItems = state.cartItems.filter((item)=>item.props.id !== action.payload.id)
        },
        setFilterCategory:(state,action)=>{
            state.filterCategory = action.payload.category
        },
        showDescriptionModal:(state,action)=>{
            state.showDescriptionModal.value = true;
            state.showDescriptionModal.id = action.payload.id
        },
        closeDescriptionModal:(state)=>{
            state.showDescriptionModal.value = false;
            state.showDescriptionModal.id = 0
        },
        toggleFilterModal:(state)=>{
            state.isFilterModalOpen = !state.isFilterModalOpen
        },
        setSearchKeyword:(state,action)=>{
            state.searchKeyword = action.payload
        },
        setFilterPrice:(state,action)=>{
            state.filterPrice = action.payload
        },
        totalCartPrice:(state)=>{
            //@ts-ignore
            state.cartPrice =  state.cartItems.reduce((total, item) => total + item.props.cost, 0);

        },
        updateCartPrice:(state,action)=>{
            state.cartPrice = state.cartPrice + action.payload
        },
        togglePurchaseModal:(state)=>{
            state.isPurchaseModalOpen = !state.isPurchaseModalOpen
        }



    }
} )

export const {toggleModal,openModal,addToCart,filterCard,setFilterCategory,showDescriptionModal,closeDescriptionModal,toggleFilterModal,togglePurchaseModal,setSearchKeyword,setFilterPrice,updateCartPrice} = modalSlice.actions

export default modalSlice.reducer