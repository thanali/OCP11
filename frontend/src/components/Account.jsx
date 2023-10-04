import PropTypes from "prop-types"

export default function Account({ type, cardNumber, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank {type} (x{cardNumber})
        </h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  type: PropTypes.string.isRequired,
  cardNumber: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

Account.defaultProps = {
  type: "",
  cardNumber: "0000",
  amount: "00,000.00",
  description: ""
}
