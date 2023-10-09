import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
    email: null,
    error: null
  },
  reducers: {
    // Action de mise en place du profil
    setProfile: (state, action) => {
      state.userName = action.payload.data.body.userName
      state.firstName = action.payload.data.body.firstName
      state.lastName = action.payload.data.body.lastName
      state.email = action.payload.data.body.email
      state.error = null
    },
    // Action lors d'une erreur de chargement du profil
    errorProfile: (state, action) => {
      state.userName = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.error = action.payload
    },
    // Action pour réinitialiser le profil
    resetProfile: state => {
      state.userName = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.error = null
    }
  }
})

// on extrait les actions et le reducer
export const { actions, reducer } = profileSlice
// Export chaque action individuellement
export const { setProfile, errorProfile, resetProfile } = actions
// Export le reducer comme default export
export default reducer
