import { Link } from "react-router-dom"

const Home = () => (
    <div className="text-white m-20">
        <div className="font-poppins">
            <h1 className="text-[72px]">Hi, <br />I'm
            Mark
            <br />
            a web developer
            </h1>
            <h2>MERN stack developer</h2>
            <Link to="/contact" className="">CONTACT ME</Link>
        </div>
    </div>
)

export default Home