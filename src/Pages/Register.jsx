import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import bgImg from '../assets/login.jpg'
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, UpdateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");


    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must contain at least 6 characters, an uppercase letter, and a lowercase letter."
            );
            return;
        }
        setError("");

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                UpdateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        const userData = {
                            name: name, email: email
                        }
                        axios.post('https://life-pair-server.vercel.app/addUsers', userData)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('Registration successful');
                                    navigate("/");
                                    Swal.fire({
                                        icon: "success",
                                        title: "Registration successful!",
                                    })
                                }
                            })
                            .catch(err => {
                                console.error('Error during registration:', err);
                                Swal.fire({
                                    icon: "error",
                                    title: "Registration failed",
                                    text: err.message,
                                });
                            });


                    })
                    .catch((updateError) => {
                        setError("Error updating profile: " + updateError.message);
                        Swal.fire({
                            icon: "error",
                            title: "Error updating profile",
                            text: "Please try again later.",
                        });

                    });
            })
    };

    const handleRegistrationWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const userData = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                };
    
                axios.post('https://life-pair-server.vercel.app/addUsers', userData)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate("/");
                            Swal.fire({
                                icon: "success",
                                title: "Google registration successful!",
                            })
                        } else if (res.data.message === 'User already exists') {
                            navigate("/");
                            Swal.fire({
                                icon: "success",
                                title: "Welcome back!",
                            })
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Registration failed",
                                text: "Unexpected server response. Please try again.",
                            });
                        }
                    })
                  
            })
            .catch((error) => {
                setError("Google registration failed: " + error.message);
                Swal.fire({
                    icon: "error",
                    title: "Google registration failed",
                    text: error.message,
                });
            });
    };
    
    

    return (
        <div className="py-20 bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImg})` }}>
            <section className="  py-3">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create an account
                            </h1>
                            <form onSubmit={handleRegistration} className="space-y-4 md:space-y-6" action="#">

                                <button
                                    type="submit"
                                    onClick={handleRegistrationWithGoogle}
                                    className="flex items-center justify-center w-full text-black border-2 bg-primary-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    <FcGoogle size={24} className="mr-2" />
                                    Login with Google
                                </button>

                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-full h-px bg-gray-200 border-0" />
                                    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                                    <input type="url" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input
                                        type='password'
                                        id="password"
                                        name="password"
                                        className="bg-gray-50 border relative border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />

                                </div>


                                <button type="submit" className="w-full text-white bg-red-800  bg-primary-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/Login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Register;