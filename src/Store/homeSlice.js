import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  value: 0 
}
export const homeSlice = createSlice({

  name: 'home',
  initialState:{
    url:{},
    generes:{}
  },
  reducers: {
    getApiConfiguration:(state,action)=>{
      state.url=action.payload;
    },
    getGeners:(state,action)=>{
          state.generes=action.payload;
    }
  },
  
})
 console.log("home ",homeSlice);
export const {getApiConfiguration,getGeners  } = homeSlice.actions
export default homeSlice.reducer