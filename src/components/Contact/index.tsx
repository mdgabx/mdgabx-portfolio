const Contact = () => {
  return (
    <div className="container-fluid mx-auto flex flex-row items-center justify-center">
      <div className="w-10/12 lg:w-9/12 flex flex-col bg-white shadow-md my-10 p-5 border-2 rounded-lg">
        <div className="">
          <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">
            Contact Me
          </h2>
          <p className="font-quicksand my-4">
            Get in touch or send me an email at{" "}
            <strong>a.markdexter@gmail.com</strong>
          </p>
          <div className="font-quicksand">
            <form className="my-4">
              <div className="flex flex-col gap-2 space-y-5">
                <div className="flex flex-row w-full gap-3">
                  <input
                    className="w-1/2 p-2 border border-gray-800/70 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/80 "
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />

                  <input
                    className="w-1/2 p-2 border border-gray-800/70 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/80 "
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <input
                  className="p-2 border border-gray-800/70 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/80"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />

                <textarea
                  className="p-2 border border-gray-800/70 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/80 "
                  style={{ height: "150px" }}
                  placeholder="Message"
                  name="message"
                  required
                />

                <button
                  type="submit"
                  className="font-poppins p-2 shadow-lg text-white w-20 mx-auto rounded-lg bg-teal-600/80
                            hover:bg-white hover:text-green-600/80 border hover:border-green-600/80"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
