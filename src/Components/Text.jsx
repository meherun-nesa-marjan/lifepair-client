import React from 'react';

const Text = () => {
    return (
        <div>
            <form onSubmit={handleSave}>
                {/* Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Your Name:</label>
                    <input
                        type="text"
                        name="Name"
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Father's Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Father's Name:</label>
                    <input
                        type="text"
                        name="FathersName"
                        
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Mother's Name */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Mother's Name:</label>
                    <input
                        type="text"
                        name="MothersName"
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Profile Image */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Profile Image:</label>
                    <input
                        type="url"
                        name="ProfileImage"

                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Contact Email (Read-only) */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Contact Email:</label>
                    <input
                        type="email"
                        name="ContactEmail"
                        value={user.email}
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        readOnly
                    />
                </div>

                {/* Mobile Number */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Mobile Number:</label>
                    <input
                        type="text"
                        name="MobileNumber"
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Age:</label>
                    <input
                        type="number"
                        name="Age"
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Biodata Type */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Biodata Type:</label>
                    <select
                        name="BiodataType"
                      
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
                        name="DateOfBirth"
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                    />
                </div>

                {/* Height */}
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 text-sm font-bold text-gray-700">Height:</label>
                    <select
                        name="Height"
                      
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
                        name="Race"
                        
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
                        name="Occupation"
                       
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
                    <label className="w-2/12 font-bold text-sm  text-gray-700 dark:text-gray-300">Permanent Division</label>
                    <select
                        type="text"
                        name="PermanentDivision"
                      
                       
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 flex items-center">
                    <label className="w-2/12 font-bold text-sm  text-gray-700 dark:text-gray-300">Present Division</label>
                    <select
                       type="text"
                       name="PresentDivision"
                      
                        
                        className="w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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

                <div className="mb-4 flex items-center">
                    <label
                        className="w-2/12 text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                        Weight (kg) :
                    </label>
                    <select
                        type="number"
                        name="Weight"
                       
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
                        name="ExpectedPartnerAge"
                       
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
                        name="ExpectedPartnerHeight"
                        
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
                        name="ExpectedPartnerWeight"
                      
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

             
                    <button
                        type="submit"
                        onClick={handleSave}
                        className="w-40 bg-red-800 text-white p-2 rounded"
                    >
                        Save
                    </button>
                  
                
            </form> 
        </div>
    );
};

export default Text;