import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactSlider from 'react-slider';

const Biodatas = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [gender, setGender] = useState('');
    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(60);
    const [division, setDivision] = useState('');
    const itemsPerPage = 21;
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const { data: biodatas = [] } = useQuery({
        queryKey: ["biodatas", currentPage, itemsPerPage, gender, division, minAge, maxAge],
        queryFn: async () => {
            const res = await axios.get(`https://life-pair-server.vercel.app/allBiodatas?page=${currentPage}&limit=${itemsPerPage}&gender=${gender}&division=${division}&minage=${minAge}&maxage=${maxAge}`);
            return res.data;
        },
    });
    const handleAgeChange = (values) => {
        setMinAge(values[0]);
        setMaxAge(values[1]);
    };

    return (
        <div className="pt-24 mx-auto w-11/12">
            {/* Filter Section */}
            <div className="lg:flex">
                <div className="lg:w-1/4 w-full p-4 bg-gray-100 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold">Filter</h2>
                    <div className="mt-4">
                        <label className="block">Age Range: {minAge} - {maxAge}</label>
                        <ReactSlider
                            className="w-full h-2 bg-red-500"
                            min={18}
                            max={70}
                            value={[minAge, maxAge]}
                            onChange={handleAgeChange}
                            renderThumb={(props) => <div {...props} className="slider-thumb bg-red-800 h-4 w-4 rounded-full" />}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block">Gender</label>
                        <select
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block">Permanent Division</label>
                        <select
                            onChange={(e) => setDivision(e.target.value)}
                            className="w-full p-2 border rounded">
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                </div>

                {/* Biodata Display Section */}
                <div className="lg:w-3/4 w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {biodatas.map((biodata) => (
                        <div key={biodata.BiodataId} className="bg-white border rounded-lg shadow-md hover:shadow-lg transform transition-all hover:scale-105">
                            <img
                                className="object-cover w-full rounded-t-lg h-64"
                                src={biodata.ProfileImage}
                                alt={`Profile of ${biodata.Name}`}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{biodata.Name}</h3>
                                <p>BiodataId: {biodata.BiodataId}</p>
                                <p>Age: {biodata.Age}</p>
                                <p>Biodata Type: {biodata.BiodataType}</p>
                                <p>Permanent Division: {biodata.PermanentDivision}</p>
                                <p>Occupation: {biodata.Occupation}</p>
                                <Link to={`/BiodataDetails/${biodata.BiodataId}`} className="text-red-800 font-extrabold mt-2 block">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center py-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                    className="px-4 py-2 border rounded-l-md"
                >
                    Prev
                </button>
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 border-2 mx-1 ${currentPage === page ? 'bg-red-700 text-white' : ''}`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))}
                    disabled={currentPage === pages.length - 1}
                    className="px-4 py-2 border rounded-r-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Biodatas;
