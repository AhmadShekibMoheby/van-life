import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="about-content">
        <img src="./hotel.jpg" alt="" className="about-img" />
        <div className="about-box">
            <h1 className="about-title">Dont squeeze in a sedan when you could relax in a van.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe aut id facere porro voluptates aliquam quia! Eos quas expedita officiis ducimus quo. Vel libero ratione sapiente sequi voluptatem. Molestiae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe aut id facere porro voluptates aliquam quia! Eos quas expedita officiis ducimus quo. Vel libero ratione sapiente sequi voluptatem. Molestiae.
            </p>

            <div className="order-div">
                <h2>Your Destination is waiting. <br />Your van is ready.</h2>
                <Link className="order-btn" to="/vans">Explore our vans</Link>
            </div>
        </div>
    </section>
  )
}
export default About