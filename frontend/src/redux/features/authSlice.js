import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, error: null },
  reducers: {
    // Action pour enregistrer token dans le store
    setToken: (state, action) => {
      state.token = action.payload.token
      state.error = null
    },
    // Action pour gérer les erreurs d'authentification
    errorLogin: (state, action) => {
      state.token = null
      state.error = action.payload
    },
    // Action pour retirer le token du store
    logout: state => {
      state.token = null
      state.error = null
    }
  }
})
// on extrait les actions et le reducer
export const { actions, reducer } = authSlice
// on export chaque action individuellement
export const { setToken, errorLogin, logout } = actions
// on export le reducer comme default export
export default reducer
