import axios from "axios";
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyBiodata = () => {
    const [myBiodata, setMyBiodata] = useState({}); 
    const { email } = useParams();


  useEffect(() => {
  
      axios
        .get(`http://localhost:5000/myBiodata/${email}`)
        .then((response) => {
          setMyBiodata(response.data);
        })
        .catch((error) => {
          console.error("Error fetching biodata:", error);
        });
  }, [email]);




 

 

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={myBiodata.ProfileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">{myBiodata.Name}</h1>
          <p className="text-gray-500">{myBiodata.BiodataType}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Date of Birth:</strong> {myBiodata.DateOfBirth}
          </p>
          <p>
            <strong>Age:</strong> {myBiodata.Age} years
          </p>
          <p>
            <strong>Height:</strong> {myBiodata.Height} cm
          </p>
          <p>
            <strong>Weight:</strong> {myBiodata.Weight} kg
          </p>
          <p>
            <strong>Occupation:</strong> {myBiodata.Occupation}
          </p>
          <p>
            <strong>Race:</strong> {myBiodata.Race}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Family Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Fathers Name:</strong> {myBiodata.FathersName}
          </p>
          <p>
            <strong>Mothers Name:</strong> {myBiodata.MothersName}
          </p>
          <p>
            <strong>Permanent Division:</strong> {myBiodata.PermanentDivision}
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
            <strong>Expected Partner Weight:</strong> {myBiodata.ExpectedPartnerWeight} kg
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>Email:</strong> {myBiodata.ContactEmail}
          </p>
          <p>
            <strong>Mobile:</strong> {myBiodata.MobileNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBiodata;
