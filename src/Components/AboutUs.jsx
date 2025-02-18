import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
    <div className="bg-pink-50 dark:bg-gray-900 dark:text-white py-16 px-6">
          <div className="w-11/12 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-pink-600 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 dark:bg-gray-900 dark:text-white max-w-3xl mx-auto">
            Welcome to <span className="font-semibold text-pink-500">Life Pair</span>, where love meets destiny. 
            We believe that marriage is a beautiful journey, and our mission is to connect 
            hearts that are meant to be together. With trust, tradition, and technology, 
            we help individuals find their perfect match.
          </p>
        </div>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-2xl shadow-md text-center border border-pink-300 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">💖 Our Mission</h3>
            <p className="text-gray-600 dark:bg-gray-900 dark:text-white">
              To create meaningful connections and help people find their life partners 
              through a reliable and trusted platform.
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-2xl shadow-md text-center border border-pink-300 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">💍 Our Vision</h3>
            <p className="text-gray-600 dark:bg-gray-900 dark:text-white">
              To become the most trusted matrimonial platform that unites souls and builds 
              lifelong relationships based on love, trust, and respect.
            </p>
          </div>
  
          <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-2xl shadow-md text-center border border-pink-300 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">🔒 Why Trust Us?</h3>
            <p className="text-gray-600 dark:bg-gray-900 dark:text-white">
              We ensure privacy, security, and authenticity, so you can confidently find 
              your perfect match without any worries.
            </p>
          </div>
        </div>
  
        <div className="mt-12 text-center">
          <Link to={'/Biodatas'} className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-700 transition">
            Find Your Match
          </Link>
        </div>
      </div>
    </div>
    );
  };
  
  export default AboutUs;
  