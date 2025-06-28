import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    allWomenItems: [],
    allMenItems: [],
    sunglasses: [],
    skincareAndFragrance: [],
    laptopsAndSmartPhones: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setAllWomenItems: (state, action) => {state.allWomenItems = action.payload},
        setAllMenItems: (state, action) => {state.allMenItems = action.payload},
        setSunglasses: (state, action) => {state.sunglasses = action.payload},
        setSkincareAndFragrance: (state, action) => {state.skincareAndFragrance = action.payload},
        setLaptopsAndSmartPhones: (state, action) => {state.laptopsAndSmartPhones = action.payload},
    }
})


export const {
    setAllWomenItems,
    setAllMenItems,
    setSunglasses,
    setSkincareAndFragrance,
    setLaptopsAndSmartPhones
} = productSlice.actions

export default productSlice.reducer;