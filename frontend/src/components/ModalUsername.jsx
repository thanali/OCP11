import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProfile } from "../redux/features/profileSlice"

export default function ModalUsername() {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [newUserName, setNewUserName] = useState("")
  const [msgSuccess, setMsgSuccess] = useState(null)
  const [msgError, setMsgError] = useState(null)

  // Redux State
  const { token } = useSelector(state => state.auth)

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
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ userName: newUserName })
          }
        )
        const data = await response.json()
        dispatch(setProfile({ data }))
        setNewUserName("")
        setMsgSuccess("Username successfully changed")
        setTimeout(toggle, 3000)
      } catch (error) {
        setMsgError("Unsuccessfull change")
      }
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
            {msgError && <p className="alert">{msgError}</p>}
            <form
              className="modal-form"
              onSubmit={e => handleUserNameSubmit(e)}>
              <input
                className="modal-form-input"
                name="answer"
                type="text"
                value={newUserName}
                onChange={e => setNewUserName(e.target.value)}
              />

              <button type="submit" className="edit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
