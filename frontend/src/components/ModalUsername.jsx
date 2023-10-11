import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUsername } from "../redux/features/profileSlice"

export default function ModalUsername() {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [newUserName, setNewUserName] = useState("")
  const [msgSuccess, setMsgSuccess] = useState(null)
  const [msgError, setMsgError] = useState(null)

  // Redux State
  const { token } = useSelector(state => state.auth)
  const { loading, error } = useSelector(state => state.profile)

  const dispatch = useDispatch()

  const toggle = () => {
    setIsOpen(!isOpen)
    setMsgSuccess(null)
    setMsgError(null)
  }

  const handleUserNameSubmit = async e => {
    e.preventDefault()
    setMsgSuccess(null)
    setMsgError(null)

    if (newUserName === "") {
      setMsgError("Please enter your new username")
    } else {
      dispatch(updateUsername({ token, newUserName }))
      setNewUserName("")
      setMsgSuccess("Username successfully changed !")
      setTimeout(toggle, 2500)
    }
  }

  return (
    <>
      <button className="edit-button" onClick={toggle}>
        Edit Username
      </button>

      {isOpen && (
        <div className="modal">
          <div className="inner-modal">
            <button className="modal-close" onClick={toggle}>
              x
            </button>
            <h2 className="modal-title">Change Username</h2>

            {msgSuccess && <p className="success">{msgSuccess}</p>}
            {error && !msgError && <p className="alert">{error.message}</p>}
            {msgError && <p className="alert">{msgError}</p>}

            <form
              className="modal-form"
              onSubmit={e => handleUserNameSubmit(e)}>
              <input
                className="modal-form-input"
                name="answer"
                type="text"
                placeholder="Enter your new username here"
                value={newUserName}
                onChange={e => setNewUserName(e.target.value)}
              />

              <button type="submit" className="modal-button">
                {loading ? "We're on it" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
