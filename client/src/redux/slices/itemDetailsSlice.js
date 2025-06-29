import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productDetails: []
};

const itemDetailsSlice = createSlice({
    name:'itemDetails',
    initialState,
    reducers: {
        setItemDetails: (state,action) => {state.productDetails = action.payload}
    }
})

export const selectItemDetails = (state) => state.itemDetails.productDetails
export const {setItemDetails} = itemDetailsSlice.actions
export default itemDetailsSlice.reducer