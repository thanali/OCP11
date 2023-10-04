import React from "react"
import ReactDOM from "react-dom/client"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import App from "./pages/App"
import "./style/index.css"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import User from "./pages/User"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
