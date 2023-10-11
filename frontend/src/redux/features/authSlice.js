import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async userCredentials => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials)
    })
    const data = await response.json()
    const token = data?.body.token
    return token
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: null,
    error: null
  },
  reducers: {
    // Action pour retirer le token du store
    logout: state => {
      state.loading = false
      state.token = null
      state.error = null
    }
  },
  // Actions gérées par le thunk asynchrone
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  }
})

// Extrait l'action et le reducer
export const { actions, reducer } = authSlice
// Export de l'action individuellement
export const { logout } = actions
// Export le reducer comme default export
export default reducer
