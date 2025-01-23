import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gradient-to-b from-[#B1E3D5] pt-24 to-[#F7FCFA] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-5xl font-extrabold text-red-700 text-center mb-8">
                About Us
            </h1>
            <p className="text-xl text-center mb-6 text-red-600 leading-relaxed">
                Welcome to our platform! We are committed to building meaningful relationships 
                and delivering a seamless user experience. Our mission is to connect people and 
                create a space where everyone feels welcome and valued.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-700">
                        Our Mission
                    </h2>
                    <p className="text-lg">
                        At our core, we aim to connect people from all walks of life. 
                        We strive to create a trusted platform that fosters genuine connections 
                        and long-lasting relationships.
                    </p>
                </div>
                <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-700">
                        Our Vision
                    </h2>
                    <p className="text-lg">
                        Our vision is to make the world a smaller place by bringing people together. 
                        We work tirelessly to enhance the user experience and provide innovative solutions 
                        for our community.
                    </p>
                </div>
            </div>
            <div className="bg-red-600 text-white rounded-lg p-6 shadow-lg mt-12">
                <h3 className="text-3xl font-bold mb-4 text-center">
                    Get In Touch
                </h3>
                <p className="text-lg text-center">
                    If you have questions, suggestions, or need support, feel free to 
                    <Link
                        to={'/Contact'}
                        className="text-yellow-300 underline hover:text-yellow-400"
                    >
                        contact us
                    </Link>
                    . We're here to help!
                </p>
            </div>
        </div>
    </div>
    );
};

export default About;