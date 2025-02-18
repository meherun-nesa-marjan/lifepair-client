import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const { data: requests = [],  refetch } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPremiumRequests");
      console.log(res.data)
      return res.data;
    },
  });

  const { data: PremiumMembers = []} = useQuery({
    queryKey: ["PremiumMembers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPremiumMembers");
      console.log(res.data)
      return res.data;
    },
  });

const handleMakePremium = (request) => {
    axiosSecure
      .patch(`/makePremium/${request._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch(); 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${request.Name} is Premium Now`,
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
  return (
    <div className='py-10'>
      <div className="">
      <h1 className="text-2xl font-bold mb-4">Premium Approval Requests</h1>
     <div className="overflow-x-auto">
     <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 dark:text-slate-600">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Biodata ID</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td className="border px-4 py-2 text-center">{request.Name}</td>
              <td className="border px-4 py-2 text-center">{request.ContactEmail}</td>
              <td className="border px-4 text-center py-2">{request.BiodataId}</td>
              <td className="border px-4 py-2 text-center">
                <button
                 onClick={() => handleMakePremium(request)}
                  className="bg-red-800 text-white px-4 py-2 rounded"
                >
                 Approved Premium
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      </div>
      <div className="pt-7">
      <h1 className="text-2xl font-bold mb-4">Premium Members</h1>
     <div className="overflow-x-auto">
     <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 dark:text-slate-600">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Biodata ID</th>
           
          </tr>
        </thead>
        <tbody>
          {PremiumMembers .map((PremiumMember) => (
            <tr key={PremiumMember._id}>
              <td className="border px-4 py-2 text-center">{PremiumMember.Name}</td>
              <td className="border px-4 py-2 text-center">{PremiumMember.ContactEmail}</td>
              <td className="border px-4 text-center py-2">{PremiumMember.BiodataId}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      </div>
    </div>
  );
};

export default ApprovedPremium;
