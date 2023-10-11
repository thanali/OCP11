import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <Header />

      <main className="main bg-dark">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}
