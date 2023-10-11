import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Récupération du profil
export const fetchProfile = createAsyncThunk(
  "user/fetchprofile",
  async token => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = await response.json()
    return data
  }
)

// Modification de l'username
export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async ({ token, newUserName }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName: newUserName })
    })
    const data = await response.json()
    return data
  }
)

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    userName: null,
    firstName: null,
    lastName: null,
    email: null,
    error: null
  },
  reducers: {
    // Action pour réinitialiser le profil
    resetProfile: state => {
      state.loading = false
      state.userName = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.error = null
    }
  },
  // Actions gérées par le thunk asynchrone fetchProfile
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false
        const { userName, firstName, lastName, email } = action.payload.body
        state.userName = userName
        state.firstName = firstName
        state.lastName = lastName
        state.email = email
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // Actions gérées par le thunk asynchrone UpdateUsername
      .addCase(updateUsername.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.loading = false
        state.userName = action.payload.body.userName
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

// Extrait l'action et le reducer
export const { actions, reducer } = profileSlice
// Export de l'action individuellement
export const { resetProfile } = actions
// Export le reducer comme default export
export default reducer
