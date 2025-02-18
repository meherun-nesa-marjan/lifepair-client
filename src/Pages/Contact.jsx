import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Contact = () => {
    return (
        <div className="bg-pink-50 dark:bg-gray-900 dark:text-white text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-8">
                Contact Us
            </h1>
            <p className="text-xl text-pink-600 text-center mb-6 leading-relaxed">
                Have questions, suggestions, or need support? We're here to help! 
                Get in touch with us through any of the methods below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-900 dark:text-white text-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-700">
                        Send Us a Message
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="bg-white  dark:bg-gray-900 dark:text-white text-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-700">
                        Reach Out to Us
                    </h2>
                    <ul className="space-y-4 text-lg">
                        <li>
                            <strong>📧 Email:</strong>{" "}
                            <a
                                href="mailto:support@example.com"
                                className="text-red-500 underline hover:text-red-700"
                            >
                                support@example.com
                            </a>
                        </li>
                        <li>
                            <strong>📞 Phone:</strong>{" "}
                            <a
                                href="tel:+1234567890"
                                className="text-red-500 underline hover:text-red-700"
                            >
                                +1 234 567 890
                            </a>
                        </li>
                        <li>
                            <strong>🏢 Address:</strong> 1234 Success Lane, Suite 101, 
                            Dream City, DC 12345
                        </li>
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 text-white font-bold h-10 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700"
                            >
                                <CiFacebook />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex font-bold items-center justify-center text-white bg-red-600 rounded-full hover:bg-red-700"
                            >
                                <CiTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 text-white font-bold flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700"
                            >
                                <CiInstagram />
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;