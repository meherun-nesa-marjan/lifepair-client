import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const EditBiodata = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState({
        name: "",
        fathersName: "",
        mothersName: "",
        profileImage: "",
        contactEmail: user.email || "",
        mobileNumber: "",
        age: "",
        biodataType: "",
        dateOfBirth: "",
        height: "",
        race: "",
        occupation: "",
        weight: "",
        expectedPartnerAge: "",
        expectedPartnerHeight: "",
        expectedPartnerWeight: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBiodata({ ...biodata, [name]: value });
    };
        
   
    

    const handleSave = (e) => {
        e.preventDefault();
    
        axios
            .post("/saveBiodata", biodata)
            .then((response) => {
                console.log(response.data);
                Swal.fire("Success", "Biodata saved successfully!", "success");
               
                setBiodata({
                    name: "",
                    fathersName: "",
                    mothersName: "",
                    profileImage: "",
                    contactEmail: user.email || "",
                    mobileNumber: "",
                    age: "",
                    biodataType: "",
                    dateOfBirth: "",
                    height: "",
                    race: "",
                    occupation: "",
                    weight: "",
                    expectedPartnerAge: "",
                    expectedPartnerHeight: "",
                    expectedPartnerWeight: "",
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire("Error", "Failed to save biodata.", "error");
            });
    };
    const handlePublish = () => {
        // Implement the publish logic here
        Swal.fire("Info", "Publish feature not implemented yet.", "info");
    };


    return (
        <div className="py-10">
            <div className="text-center mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Edit Biodata</h1>
            </div>
            <form>
                {/* Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={biodata.name}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Father's Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Father's Name:</label>
                    <input
                        type="text"
                        name="fathersName"
                        value={biodata.fathersName}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Mother's Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Mother's Name:</label>
                    <input
                        type="text"
                        name="mothersName"
                        value={biodata.mothersName}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Profile Image */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Profile Image:</label>
                    <input
                        type="url"
                        name="profileImage"
                        value={biodata.profileImage}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Contact Email (Read-only) */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Contact Email:</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={biodata.contactEmail}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        readOnly
                    />
                </div>

                {/* Mobile Number */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Mobile Number:</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={biodata.mobileNumber}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={biodata.age}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Biodata Type */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Biodata Type:</label>
                    <select
                        name="biodataType"
                        value={biodata.biodataType}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Date of Birth */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={biodata.dateOfBirth}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                    />
                </div>

                {/* Height */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Height:</label>
                    <select
                        name="height"
                        value={biodata.height}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="5'0">5'0</option>
                        <option value="5'1">5'1</option>
                        <option value="6'0">6'0</option>
                    </select>
                </div>
                <div className='mb-4 flex items-center'>
                    <label
                        className="w-2/12 font-bold text-sm  text-gray-700 dark:text-gray-300"
                    >
                        Race :
                    </label>
                    <select
                        name="race"
                        value={biodata.race}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option value="">
                            Select
                        </option>
                        <option value="Light">Light</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark">Dark</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-4 flex items-center">

                    <label
                        className="w-2/12 font-bold text-sm  text-gray-700 dark:text-gray-300"
                    >
                        Occupation :
                    </label>
                    <select
                        name="occupation"
                        value={biodata.occupation}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option value="">
                            Select
                        </option>
                        <option value="Student">Student</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                    </select>

                </div>

                <div className="mb-4 flex items-center">
                    <label
                        className="w-2/12 text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                        Weight (kg) :
                    </label>
                    <select
                        type="number"
                        name="weight"
                        value={biodata.weight}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option >
                            Select
                        </option>
                        {Array.from({ length: 100 }, (_, i) => i + 30).map((weight) => (
                            <option key={weight} value={weight}>
                                {weight} kg
                            </option>
                        ))}
                    </select>

                </div>
                <div className="mb-4 flex items-center">
                    <label
                        className="w-2/12 text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                        Expected Partner Age :

                    </label>
                    <input
                        type="number"
                        name="expectedPartnerAge"
                        value={biodata.expectedPartnerAge}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"

                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label
                        className="w-2/12 text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                        Expected Partner Height:

                    </label>
                    <select
                        name="expectedPartnerHeight"
                        value={biodata.expectedPartnerHeight}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >

                        <option value="">Select</option>
                        <option value="5'0">5'0</option>
                        <option value="5'1">5'1</option>
                        <option value="6'0">6'0</option>
                    </select>
                </div>
                <div className="mb-4 flex items-center">
                    <label
                        className="w-2/12 text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                        Expected Partner Weight:

                    </label>
                    <select
                        type="number"
                        name="expectedPartnerWeight"
                        value={biodata.expectedPartnerWeight}
                        onChange={handleChange}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option >
                            Select
                        </option>
                        {Array.from({ length: 100 }, (_, i) => i + 30).map((weight) => (
                            <option key={weight} value={weight}>
                                {weight} kg
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex space-x-6 pt-3">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-40 bg-red-800 text-white p-2 rounded"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handlePublish}
                        className="w-40 bg-red-800 text-white p-2 rounded"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBiodata;
