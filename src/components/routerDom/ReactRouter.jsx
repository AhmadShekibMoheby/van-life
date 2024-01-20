import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import "./style.css"

function Home(){
    return (
        <h1>Hello world!, React Router</h1>
    )
}

function About(){
    return (
        <h1>About page goes here!</h1>
    )
}

const ReactRouter = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
export default ReactRouter