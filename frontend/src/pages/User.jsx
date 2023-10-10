import { useDispatch, useSelector } from "react-redux"
import Account from "../components/Account"
// import ModalUsername from "../components/ModalUsername"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { fetchProfile } from "../redux/features/profileSlice"

export default function User() {
  // Redux State
  const { token } = useSelector(state => state.auth)
  const profile = useSelector(state => state.profile)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Chargement du profil à l'ouverture de la page
  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      dispatch(fetchProfile(token))
    }
  }, [token, dispatch, navigate])

  return (
    <>
      <div className="header">
        {profile.error && <p className="alert">{profile.error}</p>}
        <h1>
          Welcome back
          <br />
          {profile.firstName} {profile.lastName} !
        </h1>
        {/* <ModalUsername /> */}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        type={"Checking"}
        cardNumber={8349}
        amount={"2,082.79"}
        description={"Available Balance"}
      />
      <Account
        type={"Savings"}
        cardNumber={6712}
        amount={"10,928.42"}
        description={"Available Balance"}
      />
      <Account
        type={"Credit Card"}
        cardNumber={8349}
        amount={"184.30"}
        description={"Current Balance"}
      />
    </>
  )
}
