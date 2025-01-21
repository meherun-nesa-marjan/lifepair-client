import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const ContactRequests = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: contactRequests = [], refetch } = useQuery({
        queryKey: ["contactRequests"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentInfo/${user?.email}`);
            console.log(res.data)
            return res.data;
        },
    });

    const handleDelete = (request) => {
        Swal.fire({
            title: `Are you sure you want to delete ${request.name}?`,
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/deleteRequest/${request._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${request.name} has been deleted!`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting biodata:", error.response || error.message);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Failed to delete the biodata. Please try again.",
                        });
                    });
            }
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Contact Requests {contactRequests.length}</h1>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center py-4 text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-gray-200">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Biodata ID</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Mobile No</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>


                    </thead>
                    <tbody>
                        {contactRequests.map((request) => (
                            <tr key={request._id}>
                                <td className="px-4 py-2">
                                    {request.status === "approved" ? request.name : "N/A"}
                                </td>
                                <td className="px-4 py-2">{request.biodataId}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 rounded ${request.status === "approved"
                                            ? " text-green-800"
                                            : " text-yellow-400"
                                            }`}
                                    >
                                        {request.status === "approved" ? "Approved" : "Pending"}
                                    </span>
                                </td>
                                <td className=" px-4 py-2">
                                    {request.status === "approved" ? request.mobileNumber : "N/A"}
                                </td>
                                <td className=" px-4 py-2">
                                    {request.status === "approved" ? request.email : "N/A"}
                                </td>
                                <td className="px-4 py-2 flex justify-center">
                                    {
                                        request.status === 'pending' ? (
                                            <button
                                                disabled
                                                className="font-medium flex items-center cursor-not-allowed text-gray-600"
                                            >
                                                <MdDelete className="mr-1" /> Remove
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleDelete(request)}
                                                className="font-medium flex items-center text-red-600 dark:text-red-500 hover:underline"
                                            >
                                                <MdDelete className="mr-1" /> Remove
                                            </button>
                                        )
                                    }

                                  
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ContactRequests;
