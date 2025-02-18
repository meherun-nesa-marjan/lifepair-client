import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const FavoriteBiodatas = () => {
    const { email } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: favoriteBiodatas = [], isLoading, refetch } = useQuery({
        queryKey: ["favoriteBiodatas", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favoritebiodatas/${email}`);
            return res.data;
        },
    });

    const handleDelete = (biodata) => {
        Swal.fire({
          title: `Are you sure you want to delete ${biodata.Name}?`,
          text: "This action cannot be undone!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .delete(`/deleteBiodata/${biodata._id}`)
              .then((res) => {
                if (res.data.deletedCount > 0) {
                  refetch();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${biodata.Name} has been deleted!`,
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
      

    if (isLoading) return <p>Loading favorites Biodata...</p>;
    return (
        <div className="my-8 md:px-10 min-h-screen dark:bg-gray-900 dark:text-white mx-auto">
            <h1 className="text-2xl font-bold mb-4">Favourite Biodatas: {favoriteBiodatas.length}</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Occupation</th>
                            <th scope="col" className="px-6 py-3">Permanent Address</th>
                            <th scope="col" className="px-6 py-3">Biodata ID</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoriteBiodatas.map((biodata, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {biodata.Name}
                                </th>
                                <td className="px-6 py-4">{biodata.Occupation}</td>
                                <td className="px-6 py-4">{biodata.PermanentAddress}</td>
                                <td className="px-12 py-4 ">{biodata.BiodataId}</td>
                                <td className="px-6 py-4">
                                    <button
                                      onClick={() => handleDelete(biodata)}
                                     className="font-medium flex items-center text-red-600 dark:text-red-500 hover:underline">
                                    <MdDelete />   Remove
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

export default FavoriteBiodatas;