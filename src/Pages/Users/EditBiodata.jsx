import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const EditBiodata = () => {
    const { user } = useContext(AuthContext);
    const handleSave = (e) => {
        e.preventDefault();
        console.log("Form is being submitted...");

        const biodata = {

            Name: e.target.Name.value,
            FathersName: e.target.FathersName.value,
            MothersName: e.target.MothersName.value,
            ProfileImage: e.target.ProfileImage.value,
            ContactEmail: user.email || "",
            MobileNumber: e.target.MobileNumber.value,
            Age: e.target.Age.value,
            BiodataType: e.target.BiodataType.value,
            DateOfBirth: e.target.DateOfBirth.value,
            Height: e.target.Height.value,
            Race: e.target.Race.value,
            Occupation: e.target.Occupation.value,
            Weight: e.target.Weight.value,
            PresentDivision: e.target.PresentDivision.value,
            PermanentDivision: e.target.PermanentDivision.value,
            ExpectedPartnerAge: e.target.ExpectedPartnerAge.value,
            ExpectedPartnerHeight: e.target.ExpectedPartnerHeight.value,
            ExpectedPartnerWeight: e.target.ExpectedPartnerWeight.value
        }
        console.log(biodata)

        axios
            .patch("http://localhost:5000/addBiodatas", biodata)
            .then((response) => {
                console.log("Saved biodata:", response.data);
                Swal.fire("Success", "Biodata saved successfully!", "success");
            })
            .catch((error) => {
                console.error("Error response:", error.response);
                Swal.fire(
                    "Error",
                    error.response?.data?.message || "Failed to save biodata.",
                    "error"
                );
            });
    };



    return (
        <div className="py-10">
            <div className="text-center mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Edit Biodata</h1>
            </div>
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
                        <option value="4'0">4'0</option>
                        <option value="4'1">4'1</option>
                        <option value="4'2">4'2</option>
                        <option value="4'3">4'3</option>
                        <option value="4'4">4'4</option>
                        <option value="4'4">4'5</option>
                        <option value="4'6">4'6</option>
                        <option value="4'7">4'7</option>
                        <option value="4'8">4'8</option>
                        <option value="4'9">4'9</option>
                        <option value="5'0">5'0</option>
                        <option value="5'1">5'1</option>
                        <option value="5'2">5'2</option>
                        <option value="5'3">5'3</option>
                        <option value="5'4">5'4</option>
                        <option value="5'5">5'5</option>
                        <option value="5'6">5'6</option>
                        <option value="5'7">5'7</option>
                        <option value="5'8">5'8</option>
                        <option value="5'9">5'9</option>
                        <option value="6'0">6'0</option>
                        <option value="6'1">6'1</option>
                        <option value="6'2">6'2</option>
                        <option value="6'3">6'3</option>
                        <option value="6'4">6'4</option>
                        <option value="6'5">6'5</option>
                        <option value="6'6">6'6</option>
                        <option value="6'7">6'7</option>
                        <option value="6'8">6'8</option>
                        <option value="6'9">6'9</option>
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
                        <option value="Banker">Banker</option>
                        <option value="Photographer">Photographer</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="Business">Business</option>
                        <option value="Nutritionist">Nutritionist</option>
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
                        <option value="4'0">4'0</option>
                        <option value="4'1">4'1</option>
                        <option value="4'2">4'2</option>
                        <option value="4'3">4'3</option>
                        <option value="4'4">4'4</option>
                        <option value="4'4">4'5</option>
                        <option value="4'6">4'6</option>
                        <option value="4'7">4'7</option>
                        <option value="4'8">4'8</option>
                        <option value="4'9">4'9</option>
                        <option value="5'0">5'0</option>
                        <option value="5'1">5'1</option>
                        <option value="5'2">5'2</option>
                        <option value="5'3">5'3</option>
                        <option value="5'4">5'4</option>
                        <option value="5'5">5'5</option>
                        <option value="5'6">5'6</option>
                        <option value="5'7">5'7</option>
                        <option value="5'8">5'8</option>
                        <option value="5'9">5'9</option>
                        <option value="6'0">6'0</option>
                        <option value="6'1">6'1</option>
                        <option value="6'2">6'2</option>
                        <option value="6'3">6'3</option>
                        <option value="6'4">6'4</option>
                        <option value="6'5">6'5</option>
                        <option value="6'6">6'6</option>
                        <option value="6'7">6'7</option>
                        <option value="6'8">6'8</option>
                        <option value="6'9">6'9</option>

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
                    className="w-40 bg-red-800 text-white p-2 rounded"
                >
                    Save
                </button>

            </form>
        </div>
    );
};

export default EditBiodata;
