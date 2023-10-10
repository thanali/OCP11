import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProfile = createAsyncThunk("user/profile", async token => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await response.json()
  console.log(data)
  return data
})

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
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.loading = true
        state.userName = null
        state.firstName = null
        state.lastName = null
        state.email = null
        state.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false
        const { userName, firstName, lastName, email } = action.payload.body
        state.userName = userName
        state.firstName = firstName
        state.lastName = lastName
        state.email = email
        state.error = null
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false
        state.userName = null
        state.firstName = null
        state.lastName = null
        state.email = null
        state.error = action.payload
      })
  }
})

// on extrait les actions et le reducer
export const { actions, reducer } = profileSlice
// Export chaque action individuellement
export const { resetProfile } = actions
// Export le reducer comme default export
export default reducer
