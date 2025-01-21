import axios from 'axios';
import { useContext } from 'react';
import { MdFavorite } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useBiodataStatus from '../Hooks/useBiodataStatus';

const BiodataDetails = () => {
    const { user } = useContext(AuthContext);
    const { biodataStatus } = useBiodataStatus();
    const email = user?.email
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: biodataDetails = {}, isLoading } = useQuery({
        queryKey: ["biodata", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/biodataDetails/${id}`);
            return res.data;
        },
    });
    const { biodata, similarBiodatas } = biodataDetails;
    if (isLoading) {
        return <div>Loading biodata details...</div>;
    }

    const handleAddFavorite = () => {
        const favoritebiodata = {
            email: email,
            Name: biodata.Name,
            BiodataId: biodata.BiodataId,
            PermanentAddress: biodata.PermanentDivision,
            Occupation: biodata.Occupation
        }
        console.log(favoritebiodata)
        axios
            .post("http://localhost:5000/addFavorite", favoritebiodata)
            .then((response) => {
                if (response.data.message === "already addedd") {

                    Swal.fire("Info", "This biodata is already in your favorites.", "info");
                } else {

                    Swal.fire("Success", "Biodata added to favorites successfully!", "success");
                }
            })
            .catch((error) => {
                console.error("Error response:", error.response);
                Swal.fire(
                    "Error",
                    error.response?.data?.message || "Failed to add biodata.",
                    "error"
                );
            });
    }

    return (
        <div className="pt-24 mx-auto w-11/12">
            {/* Biodata Details */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                <img
                    className="object-cover w-full rounded-t-lg h-fit"
                    src={biodata.ProfileImage}
                    alt="Profile"
                />
                <div className="p-4">

                    <div className=" mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">

                        <div className="mt-6">
                            <p>Status: <strong>{biodataStatus}</strong></p>
                            <h3 className="text-3xl font-semibold">{biodata.Name}</h3>
                            <p>BiodataId: {biodata.BiodataId}</p>
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <p>
                                    <strong>Date of Birth:</strong> {biodata.DateOfBirth}
                                </p>
                                <p>
                                    <strong>Age:</strong> {biodata.Age} years
                                </p>
                                <p>
                                    <strong>Height:</strong> {biodata.Height} cm
                                </p>
                                <p>
                                    <strong>Weight:</strong> {biodata.Weight} kg
                                </p>
                                <p>
                                    <strong>Occupation:</strong> {biodata.Occupation}
                                </p>
                                <p>
                                    <strong>Race:</strong> {biodata.Race}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Family Information
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <p>
                                    <strong>Fathers Name:</strong> {biodata.FathersName}
                                </p>
                                <p>
                                    <strong>Mothers Name:</strong> {biodata.MothersName}
                                </p>
                                <p>
                                    <strong>Permanent Division:</strong> {biodata.PermanentDivision}
                                </p>
                                <p>
                                    <strong>Present Division:</strong> {biodata.PresentDivision}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Partner Preferences
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <p>
                                    <strong>Expected Partner Age:</strong> {biodata.ExpectedPartnerAge} years
                                </p>
                                <p>
                                    <strong>Expected Partner Height:</strong> {biodata.ExpectedPartnerHeight} cm
                                </p>
                                <p>
                                    <strong>Expected Partner Weight:</strong> {biodata.ExpectedPartnerWeight} kg
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                                Contact Information
                            </h2>
                            {biodataStatus === 'premium' ? (
                                <div className="grid grid-cols-2 gap-4">
                                <p>
                                    <strong>Email:</strong> {biodata.ContactEmail}
                                </p>
                                <p>
                                    <strong>Mobile:</strong> {biodata.MobileNumber}
                                </p>
                            </div>
                            ) : (
                                <p className="text-gray-500">
                                    Contact information is available for premium members only.
                                    <Link
                                    to={`/CheckoutPage/${biodata.BiodataId}`}
                                    className="text-red-800 font-bold mt-2 block"
                                >
                                    View Contact information
                                </Link>
                                </p>
                            )}
                           
                        </div>
                        <div className="my-5">
                            <button
                                onClick={handleAddFavorite}
                                className='flex px-6 py-3 rounded items-center text-2xl font-bold text-white bg-red-800'>

                                <MdFavorite /> Add Favorite
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/* Similar Biodatas */}
            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Similar Biodatas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {similarBiodatas.map((similar) => (
                        <div
                            key={similar.BiodataId}
                            className="bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
                        >
                            <img
                                className="object-cover w-full rounded-t-lg h-64"
                                src={similar.ProfileImage || '../assets/profile.png'}
                                alt="Profile"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{similar.Name}</h3>
                                <p>BiodataId: {similar.BiodataId}</p>
                                <p>Age: {similar.Age}</p>
                                <p>Biodata Type: {similar.BiodataType}</p>
                                <p>Permanent Division: {similar.PermanentDivision}</p>
                                <p>Occupation: {similar.Occupation}</p>
                                <Link
                                    to={`/BiodataDetails/${similar.BiodataId}`}
                                    className="text-red-800 font-bold mt-2 block"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;
