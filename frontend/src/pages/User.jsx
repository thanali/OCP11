import { useDispatch, useSelector } from "react-redux"
import Account from "../components/Account"
// import ModalUsername from "../components/ModalUsername"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { errorProfile, setProfile } from "../redux/features/profileSlice"

export default function User() {
  // Redux State
  const { token } = useSelector(state => state.auth)
  const profile = useSelector(state => state.profile)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Si pas de token dans le state, retourner à la page d'accueil
  useEffect(() => {
    !token ? navigate("/") : null
  })

  // Chargement du profil à l'ouverture de la page
  useEffect(() => {
    const fetchDataProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        const data = await response.json()
        dispatch(setProfile({ data }))
      } catch (error) {
        dispatch(errorProfile("Erreur de chargement des données"))
      }
    }
    fetchDataProfile()
  })

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
