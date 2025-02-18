import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const EditBiodata = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const handleSave = (e) => {
        e.preventDefault();
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
        axiosSecure
            .patch("/addBiodatas", biodata)
            .then((response) => {
                console.log("Saved biodata:", response.data);
                const status = response.data.status;
                if (status === 'created') {
                    Swal.fire("Success", "Biodata created successfully!", "success");
                } else if (status === 'updated') {
                    Swal.fire("Success", "Biodata updated successfully!", "success");
                }
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

    const { data: myBiodata = {} } = useQuery({
        queryKey: ["myBiodata", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myBiodata/${user?.email}`);
            return res.data;
        },
    });



    return (
        <div className="py-10  dark:text-white w-full mx-auto">
            <div className="text-center mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Edit Biodata</h1>
            </div>
            <form className='p-8' onSubmit={handleSave}>
                {/* Name */}
                <div className="mb-4 lg:flex items-center">
                    <label className="lg:w-3/12 w-full text-sm font-bold text-gray-700 dark:text-white">Your Name:</label>
                    <input
                        type="text"
                        name="Name"
                        defaultValue={myBiodata?.Name || ""}
                        className="lg:w-2/3 w-full px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Father's Name */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Father's Name:</label>
                    <input
                        type="text"
                        name="FathersName"
                        defaultValue={myBiodata?.FathersName || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Mother's Name */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Mother's Name:</label>
                    <input
                        type="text"
                        name="MothersName"
                        defaultValue={myBiodata?.MothersName || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Profile Image */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Profile Image:</label>
                    <input
                        type="url"
                        name="ProfileImage"
                        defaultValue={myBiodata?.ProfileImage || ""}

                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Contact Email (Read-only) */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Contact Email:</label>
                    <input
                        type="email"
                        name="ContactEmail"
                        value={user.email}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        readOnly
                    />
                </div>

                {/* Mobile Number */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Mobile Number:</label>
                    <input
                        type="text"
                        name="MobileNumber"
                        defaultValue={myBiodata?.MobileNumber || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Age:</label>
                    <input
                        type="number"
                        name="Age"
                        defaultValue={myBiodata?.Age || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    />
                </div>

                {/* Biodata Type */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Biodata Type:</label>
                    <select
                        name="BiodataType"
                        defaultValue={myBiodata?.BiodataType || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Date of Birth */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Date of Birth:</label>
                    <input
                        type="date"
                        name="DateOfBirth"
                        defaultValue={myBiodata?.DateOfBirth || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
                    />
                </div>

                {/* Height */}
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white">Height:</label>
                    <select
                        name="Height"
                        defaultValue={myBiodata?.Height || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className='mb-4 lg:flex items-center'>
                    <label
                        className="w-full lg:w-3/12 font-bold text-sm  text-gray-700 dark:text-white"
                    >
                        Race :
                    </label>
                    <select
                        name="Race"
                        defaultValue={myBiodata?.Race || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 lg:flex items-center">

                    <label
                        className="w-full lg:w-3/12 font-bold text-sm  text-gray-700 dark:text-white"
                    >
                        Occupation :
                    </label>
                    <select
                        name="Occupation"
                        defaultValue={myBiodata?.Occupation || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 font-bold text-sm  text-gray-700 dark:text-white">Permanent Division</label>
                    <select
                        type="text"
                        name="PermanentDivision"
                        defaultValue={myBiodata?.PermanentDivision || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 lg:flex items-center">
                    <label className="w-full lg:w-3/12 font-bold text-sm  text-gray-700 dark:text-white">Present Division</label>
                    <select
                        type="text"
                        name="PresentDivision"
                        defaultValue={myBiodata?.PresentDivision || ""}

                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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

                <div className="mb-4 lg:flex items-center">
                    <label
                        className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white"
                    >
                        Weight (kg) :
                    </label>
                    <select
                        type="number"
                        name="Weight"
                        defaultValue={myBiodata?.Weight || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 lg:flex items-center">
                    <label
                        className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white"
                    >
                        Expected Partner Age :

                    </label>
                    <input
                        type="number"
                        name="ExpectedPartnerAge"
                        defaultValue={myBiodata?.ExpectedPartnerAge || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"

                    />
                </div>
                <div className="mb-4 lg:flex items-center">
                    <label
                        className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white"
                    >
                        Expected Partner Height:

                    </label>
                    <select
                        name="ExpectedPartnerHeight"
                        defaultValue={myBiodata?.ExpectedPartnerHeight || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                <div className="mb-4 lg:flex items-center">
                    <label
                        className="w-full lg:w-3/12 text-sm font-bold text-gray-700 dark:text-white "
                    >
                        Expected Partner Weight:

                    </label>
                    <select
                        type="number"
                        name="ExpectedPartnerWeight"
                        defaultValue={myBiodata?.ExpectedPartnerWeight || ""}
                        className="w-full lg:w-2/3 px-3 py-2 border rounded-md focus:outline-none"
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
                    className="w-full my-6 lg:w-64 bg-red-800 text-white p-2 rounded"
                >
                    Save And Publish Now
                </button>

            </form>
        </div>
    );
};

export default EditBiodata;
