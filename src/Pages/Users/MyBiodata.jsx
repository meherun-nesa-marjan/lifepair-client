import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const MyBiodata = () => {
  const { email } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  
  const { data: myBiodata = {}, isLoading, refetch } = useQuery({
    queryKey: ["myBiodata", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myBiodata/${email}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading biodata...</p>;

  if (!myBiodata || Object.keys(myBiodata).length === 0) {
    return <div className="text-center my-20 text-2xl"><p>Create your biodata to see here.</p></div>;
  }

  const handlePremium = () => {
    Swal.fire({
      title: ' are you sure to make you premium?',
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/requestPremium/${myBiodata._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "send Request Successfully!!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to request premium!",
            });
            console.error("Error requesting premium:", error.response || error.message);
          });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mt-6 space-x-4">
        <img
          src={myBiodata.ProfileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{myBiodata.Name || user.displayName}</h1>
          <p className="text-gray-500">{myBiodata.BiodataType || 'N/A'}</p>
          <p className="text-gray-500">Biodata ID: {myBiodata.BiodataId || 'N/A'}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Date of Birth:</strong> {myBiodata.DateOfBirth || 'N/A'}
          </p>
          <p>
            <strong>Age:</strong> {myBiodata.Age|| 'N/A'} years
          </p>
          <p>
            <strong>Height:</strong> {myBiodata.Height|| 'N/A'} cm
          </p>
          <p>
            <strong>Weight:</strong> {myBiodata.Weight|| 'N/A'} kg
          </p>
          <p>
            <strong>Occupation:</strong> {myBiodata.Occupation|| 'N/A'}
          </p>
          <p>
            <strong>Race:</strong> {myBiodata.Race|| 'N/A'}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Family Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Father's Name:</strong> {myBiodata.FathersName|| 'N/A'}
          </p>
          <p>
            <strong>Mother's Name:</strong> {myBiodata.MothersName|| 'N/A'}
          </p>
          <p>
            <strong>Permanent Division:</strong> {myBiodata.PermanentDivision|| 'N/A'}
          </p>
          <p>
            <strong>Present Division:</strong> {myBiodata.PresentDivision}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Partner Preferences
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Expected Partner Age:</strong> {myBiodata.ExpectedPartnerAge} years
          </p>
          <p>
            <strong>Expected Partner Height:</strong> {myBiodata.ExpectedPartnerHeight} cm
          </p>
          <p>
            <strong>Expected Partner Weight:</strong> {myBiodata.ExpectedPartnerWeight|| 'N/A'} kg
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Email:</strong> {myBiodata.ContactEmail|| user.email}
          </p>
          <p>
            <strong>Mobile:</strong> {myBiodata.MobileNumber}
          </p>
        </div>
      </div>

      <div className="my-5">
        {myBiodata.status === "request" ? (
          <button className="flex px-6 py-3 rounded items-center font-bold text-white bg-yellow-600">
            Requested for Premium
          </button>
        ) : myBiodata.status === "premium" ? (
          <button className="flex px-6 py-3 rounded items-center font-bold text-white bg-green-600">
            Premium
          </button>
        ) : (
          <button
          onClick={() => handlePremium(myBiodata)}
           
            className="flex px-6 py-3 rounded items-center font-bold text-white bg-red-800"
          >
            Make Biodata Premium
          </button>
        )}
      </div>
    </div>
  );
};

export default MyBiodata;
