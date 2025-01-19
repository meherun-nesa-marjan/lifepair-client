import { useQuery } from "@tanstack/react-query";
import { FcApproval } from "react-icons/fc";
import { HiUsers } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading, isError, error, refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

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

  if (isLoading) return <p>Loading users...</p>;
  if (isError) {
    console.error("Error fetching users:", error);
    return <p>Error fetching users: {error.message}</p>;
  }

  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#f3f0ee]">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
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
                      className="text-red-700 flex items-center font-bold px-3 py-1 rounded hover:bg-gray-100"
                    >
                      <HiUsers className="mr-1" />
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-blue-700 flex items-center text-white px-3 py-1 rounded hover:bg-blue-500">
                    <FcApproval className="mr-1" />
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
