export default function ModalUsername() {
  return (
    <>
      <button className="edit-button">Edit Username</button>

      <div className="modal">
        <div className="inner-modal">
          <button className="modal-close">x</button>
          <h2 className="modal-title">Change Username</h2>
          <form className="modal-form">
            <input className="modal-form-input" name="answer" type="text" />

            <button type="button" className="edit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
