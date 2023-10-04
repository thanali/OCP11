import iconChat from "../assets/icon-chat.png"
import iconMoney from "../assets/icon-money.png"
import iconSecurity from "../assets/icon-security.png"
import Feature from "../components/Feature"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className="bg-light">
      <Hero />

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
