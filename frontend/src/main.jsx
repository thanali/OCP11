import React from "react"
import ReactDOM from "react-dom/client"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import "./style/index.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./pages/App"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
