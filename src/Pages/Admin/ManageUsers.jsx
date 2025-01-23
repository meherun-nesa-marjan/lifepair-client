import { useQuery } from "@tanstack/react-query";
import { FcApproval } from "react-icons/fc";
import { HiUsers } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", searchQuery],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers?username=${searchQuery}`);
      return res.data;
    },
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); 
  };


  const handleMakePremium = (user) => {
    axiosSecure
      .patch(`/makePremiumbyemail/${user.email}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Premium Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error.response || error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to make the user Premium!",
        });
      });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/makeAdmin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error.response || error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to make the user an admin!",
        });
      });
  };



  return (
    <div className="mt-10 px-4 py-6 w-10/12 lg:w-full mx-auto">
       {/* Search Bar */}
       <div className="mb-6">
        <input
          type="text"
          placeholder="Search by username"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Total Users: {users.length}</h1>
      {
        users.length === 0 ? (<p>No users found.</p>):(
          <div className="overflow-x-auto">
          <table className="table-auto w-fit border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#f3f0ee]">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.role === "admin" ? (
                      <span className="text-green-600 px-3 flex font-bold items-center">
                        <HiUsers className="mr-1" /> Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-red-700 flex items-center font-bold rounded hover:bg-gray-100"
                      >
                        <HiUsers className="mr-1" />
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.status === "premium" ? (
                      <span className="text-green-500 font-bold">Premium</span>
                    ) : user.status === "request" ? (
                      <span className="text-yellow-500 font-bold">Requested</span>
                    ) : (
                      <span className="text-gray-500">Regular</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleMakePremium(user)}
                      className="flex items-center text-green-600 rounded"
                    >
                      <FcApproval className="mr-1" />
                      Make Premium
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )
      }
    
    </div>
  );
};

export default ManageUsers;
