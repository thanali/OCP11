import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, error: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token
      state.error = null
    },
    errorLogin: (state, action) => {
      state.token = null
      state.error = action.payload
    },
    logout: state => {
      state.token = null
      state.error = null
    }
  }
})

export const { actions, reducer } = authSlice

export const { setToken, errorLogin, logout } = actions

export default reducer
