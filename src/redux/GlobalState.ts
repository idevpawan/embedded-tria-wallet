import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGlobalState {
  isOnboarded: boolean;
}

const initialState: IGlobalState = {
  isOnboarded: false,
}

export const globalSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setOnboarded: (state, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload
    },
  },
})

export const { setOnboarded } = globalSlice.actions

export default globalSlice.reducer;