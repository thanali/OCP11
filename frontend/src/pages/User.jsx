import Account from "../components/Account"
import ModalUsername from "../components/ModalUsername"

export default function User() {
  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
        </h1>
        <ModalUsername />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        type={"Checking"}
        cardNumber={"x8349"}
        amount={"2,082.79"}
        description={"Available Balance"}
      />
      <Account
        type={"Savings"}
        cardNumber={"x6712"}
        amount={"10,928.42"}
        description={"Available Balance"}
      />
      <Account
        type={"Credit Card"}
        cardNumber={"x8349"}
        amount={"184.30"}
        description={"Current Balance"}
      />
    </>
  )
}
