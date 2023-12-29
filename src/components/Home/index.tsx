import { Link } from "react-router-dom"

const Home = () => (
  <div className="container-fluid text-white m-20">
    <div className="font-poppins flex flex-col items-center justify-center">
      <h1 className=" text-5xl md:text-[70px]">
        Hello, I'm
        <span className="text-green-500"> Mark</span>
      </h1>
      <br />
      <h2
        className="font-quicksand mb-10 text-teal-500 text-2xl tracking-widest w-60 md:w-1/2
                italic text-center
            "
      >
        A web developer based in the island province of Bohol, Philippines. currently
        having fun working with MERN + Typescript.
      </h2>
      <Link
        to="/contact"
        className="text-yellow-500 hover:bg-yellow-500 hover:text-black border-2 p-4 border-yellow-500"
      >
        CONTACT ME
      </Link>
    </div>
  </div>
)

export default Home
