import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BiodataDetails = () => {
    const [biodata, setBiodata] = useState(null); 
    const [similarBiodatas, setSimilarBiodatas] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null); 

        axios
            .get(`http://localhost:5000/biodataDetails/${id}`)
            .then((response) => {
                const { biodata, similarBiodatas } = response.data;
                setBiodata(biodata);
                setSimilarBiodatas(similarBiodatas);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching biodata details:', error);
                setError('Failed to load biodata details.');
                setLoading(false);
            });
    }, [id]);

   
    if (loading) {
        return <div className="pt-24 mx-auto w-11/12">Loading biodata details...</div>;
    }

    
    if (error || !biodata) {
        return (
            <div className="pt-24 mx-auto w-11/12">
                <p className="text-red-500">{error || 'Biodata not found.'}</p>
            </div>
        );
    }

    return (
        <div className="pt-24 mx-auto w-11/12">
            {/* Biodata Details */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                <img
                    className="object-cover w-full rounded-t-lg h-64"
                    src={biodata.ProfileImage}
                    alt="Profile"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{biodata.Name}</h3>
                    <p>BiodataId: {biodata.BiodataId}</p>
                    <p>Age: {biodata.Age}</p>
                    <p>Biodata Type: {biodata.BiodataType}</p>
                    <p>Permanent Division: {biodata.PermanentDivision}</p>
                    <p>Occupation: {biodata.Occupation}</p>
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
                                <p>Permanent Division: {similar.PermanentDivision}</p>
                                <p>Occupation: {similar.Occupation}</p>
                                <Link
                                    to={`/BiodataDetails/${similar.BiodataId}`}
                                    className="text-red-500 mt-2 block"
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
