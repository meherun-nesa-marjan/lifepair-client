import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { FcApproval } from "react-icons/fc";

const ContactRequestApproved = () => {
    const axiosSecure = useAxiosSecure();
    const { data: contactRequests = [], refetch } = useQuery({
        queryKey: ["contactRequests"],
        queryFn: async () => {
            const res = await axiosSecure.get('/allpaymentInfo');
            console.log(res.data)
            return res.data;
        },
    });

    const handleApproved = (request) => {
        axiosSecure
          .patch(`/Approvedrequest/${request._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch(); 
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${request.userName} Approved contact request`,
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
              text: "Failed Approved contact request!",
            });
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
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>


                    </thead>
                    <tbody>
                        {contactRequests.map((request) => (
                            <tr key={request._id}>
                                <td className="px-4 py-2">
                                    {request.name}
                                </td>
                                <td className="px-4 py-2">{request.biodataId}</td>
                                <td className=" px-4 py-2">
                                    {request.email}
                                </td>
                                <td className="px-4 py-2 flex justify-center">
                                    <button
                                        onClick={() => handleApproved(request)}
                                        className="font-medium flex items-center text-green-600 dark:text-red-500 hover:underline"
                                    >
                                        <FcApproval className="mr-1" />Approved contact request
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

export default ContactRequestApproved;