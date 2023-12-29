const Contact = () => {
    return (
        <div className="container-fluid mx-auto flex flex-row items-center justify-center">
            <div className="w-10/12 lg:w-9/12 flex flex-col bg-white shadow-md my-10 p-5 border-2 rounded-lg">
                <div className="">
                    <h2 className="text-2xl font-poppins border-b border-gray-300 py-2">Contact Me</h2>
                    <p>Get in touch or send me an email at <strong>a.markdexter@gmail.com</strong></p>
                    <div className="">
                        <form>
                            <ul>
                                <li>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li>
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="email" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message"></textarea>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact