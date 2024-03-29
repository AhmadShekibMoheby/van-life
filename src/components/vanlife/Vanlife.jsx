import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"

import "./style.css"

const Vanlife = () => {
  return (
    <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
        <footer> @ 2024 #VANLIFE</footer>
    </BrowserRouter>
  )
}
export default Vanlife