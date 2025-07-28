import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    message: ''
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        showPopUp: (state, action) => {
            state.message = action.payload
        },
        clearPopUp: (state) => {
            state.message = ''
        }
    }
});

export const {showPopUp, clearPopUp} = popUpSlice.actions;
export default popUpSlice.reducer;