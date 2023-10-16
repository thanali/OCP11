import iconChat from "../assets/icon-chat.webp"
import iconMoney from "../assets/icon-money.webp"
import iconSecurity from "../assets/icon-security.webp"
import banner from "../assets/bank-tree.webp"
import Feature from "../components/Feature"

export default function Home() {
  return (
    <div className="bg-light">
      <div className="hero">
        <img src={banner} alt="Money Tree" />
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          image={iconChat}
          alt={"Chat Icon"}
          title={"You are our #1 priority"}
          content={`Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.`}
        />
        <Feature
          image={iconMoney}
          alt={"Money Icon"}
          title={"More savings means higher rates"}
          content={`The more you save with us, the higher your interest rate will be!`}
        />
        <Feature
          image={iconSecurity}
          alt={"Security Icon"}
          title={"Security you can trust"}
          content={`We use top of the line encryption to make sure your data and money
            is always safe.`}
        />
      </section>
    </div>
  )
}
