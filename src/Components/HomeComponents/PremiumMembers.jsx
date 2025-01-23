import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const PremiumMembers = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending
  const { data: premiumMembers = [], isLoading } = useQuery({
    queryKey: ["premiumMembers"],
    queryFn: async () => {
      const res = await axios.get("https://life-pair-server.vercel.app/premiumMembers");
      return res.data;
    },
  });

  const sortedMembers = [...premiumMembers].sort((a, b) => {
    return sortOrder === "asc" ? a.Age - b.Age : b.Age - a.Age;
  });

  if (isLoading) {
    return <div>Loading Premium Members...</div>;
  }

  return (
    <div className="my-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Premium Members</h2>
      
      {/* Dropdown for sorting */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="asc">Sort by Age: Ascending</option>
          <option value="desc">Sort by Age: Descending</option>
        </select>
      </div>
      
      {/* Display sorted cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedMembers.map((member) => (
          <div
            key={member.BiodataId}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <img
              className="object-cover w-full h-48 rounded-lg mb-4"
              src={member.ProfileImage || "/default-profile.png"}
              alt="Profile"
            />
            <h3 className="text-xl font-semibold">{member.BiodataType}</h3>
            <p>
              <strong>Biodata ID:</strong> {member.BiodataId}
            </p>
            <p>
              <strong>Permanent Division:</strong> {member.PermanentDivision}
            </p>
            <p>
              <strong>Age:</strong> {member.Age} years
            </p>
            <p>
              <strong>Occupation:</strong> {member.Occupation}
            </p>
            <Link
              to={`/biodataDetails/${member.BiodataId}`}
              className="inline-block bg-red-800 text-white px-4 py-2 mt-4 rounded text-center"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumMembers;
