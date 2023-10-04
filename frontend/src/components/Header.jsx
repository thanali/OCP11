import { Link } from "react-router-dom"
import Logo from "../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/features/authSlice"

export default function Header() {
  // Redux States
  const { token } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const handleLogOut = () => {
    // Retire token du store
    dispatch(logout())
  }

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {"username"}
              </Link>

              <Link className="main-nav-item" to="/" onClick={handleLogOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
