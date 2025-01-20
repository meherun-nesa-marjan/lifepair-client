import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const { data: requests = [] } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPremiumRequests");
      console.log(res.data)
      return res.data;
    },
  });

  return (
    <div className='py-10'>
      <h1 className="text-2xl font-bold mb-4">Premium Approval Requests</h1>
     <div className="overflow-x-auto">
     <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
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
                  className="bg-red-800 text-white px-4 py-2 rounded"
                >
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

export default ApprovedPremium;
