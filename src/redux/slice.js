import { createSlice } from "@reduxjs/toolkit";

const cartSystem =  createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        addTocart(state,action){
            state.push(action.payload)
        },
        removeTocart(state,action){
            state.pop(action.payload)
        }
    }

})

export default cartSystem.reducer
export const {addTocart,removeTocart}=cartSystem.actions