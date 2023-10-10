import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/features/authSlice"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  // States
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  // State Redux
  const { loading, error } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginEvent = e => {
    e.preventDefault()
    const userCredentials = { email, password }

    dispatch(loginUser(userCredentials)).then(result => {
      if (result.payload) {
        // Si case remember me cochée, enregistrement de l'email dans le local storage
        remember
          ? localStorage.setItem("email", email)
          : localStorage.removeItem("email")

        setEmail("")
        setPassword("")
        navigate("/profile")
      }
    })
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={e => handleLoginEvent(e)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          {loading ? "Loading..." : "Sign In"}
        </button>
        {error && (
          <p className="alert">
            {"Connection error: incorrect email or password."}
          </p>
        )}
      </form>
    </section>
  )
}
