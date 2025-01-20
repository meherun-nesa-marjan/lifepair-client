import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactSlider from 'react-slider';

const Biodatas = () => {
    const [biodatas, setBiodatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [gender, setGender] = useState('');
    const [minAge, setMinAge] = useState('18');
    const [maxAge, setMaxAge] = useState('60');
    const [division, setDivision] = useState('');
    const itemsPerPage = 20;
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/allBiodatas?page=${currentPage}&limit=${itemsPerPage}&gender=${gender}&division=${division}&minage=${minAge}&maxage=${maxAge}`)
            .then(response => {
                setBiodatas(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch biodatas');
                console.error(error);
                setLoading(false);
            });
    }, [currentPage, itemsPerPage, gender,division, minAge,maxAge]);

   
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };
    const handleAgeChange = (values) => {
        setMinAge(values[0]);
        setMaxAge(values[1]);
    };

    return (
        <div className="pt-24 mx-auto w-11/12">
            {/* Filter Section */}
            <div className="lg:flex">
                <div className="w-1/4 p-4">
                    <h2 className="text-xl font-semibold">Filter</h2>
                    <div className="mt-4">
                        <label className="block">Age Range: {minAge} - {maxAge}</label>
                        <ReactSlider
                            className="w-full h-2 rounded-md bg-red-500"
                            min={18}
                            max={70}
                            value={[minAge, maxAge]}
                            onChange={handleAgeChange}
                            renderTrack={(props) => <div {...props} className="slider-track bg-black" />}
                            renderThumb={(props) => <div {...props} className="slider-thumb bg-red-800  h-2 w-2 rounded-full" />}
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
                            name="division"
                            onChange={(e) => setDivision(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
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
                <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                    {biodatas.map((biodata) => (
                        <div key={biodata.BiodataId} className="bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
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
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="px-4 py-2 border rounded-l-md"
                >
                    Prev
                </button>
                {pages.map((page) => (
                    <button
                        key={page}
                        className={`px-4 py-2 border-2 mx-2 ${currentPage === page ? 'bg-red-700' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pages?.length - 1}
                    className="px-4 py-2 border rounded-r-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Biodatas;
