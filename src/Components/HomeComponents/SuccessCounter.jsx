import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SuccessCounter = () => {
  const { data: biodataCounts = {}, isLoading, isError, error } = useQuery({
    queryKey: ["biodataCounts"],
    queryFn: async () => {
      const res = await axios.get('https://life-pair-server.vercel.app/biodataCounts');
      return res.data;
    },
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading counter data...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Destructure data
  const { totalBiodata, girlsBiodata, boysBiodata, completedMarriages } = biodataCounts;

  return (
    <div className="my-12 py-8 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Success Counter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
        <div className="bg-white dark:bg-gray-900 dark:text-white dark:border-2 shadow-md p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-red-800">{totalBiodata}</h3>
          <p className="text-gray-700 dark:bg-gray-900 dark:text-white mt-2">Total Biodata</p>
        </div>
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md dark:border-2 p-6 rounded-lg">
          <h3 className="text-4xl dark:bg-gray-900 dark:text-white font-bold text-blue-800">{girlsBiodata}</h3>
          <p className="text-gray-700 dark:bg-gray-900 dark:text-white mt-2">Girls Biodata</p>
        </div>
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md dark:border-2 p-6 rounded-lg">
          <h3 className="text-4xl font-bold dark:bg-gray-900 dark:text-white text-green-800">{boysBiodata}</h3>
          <p className="text-gray-700 dark:bg-gray-900 dark:text-white mt-2">Boys Biodata</p>
        </div>
        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md dark:border-2 p-6 rounded-lg">
          <h3 className="text-4xl font-bold dark:bg-gray-900 dark:text-white text-green-800">{completedMarriages}</h3>
          <p className="text-gray-700 dark:bg-gray-900 dark:text-white mt-2">Completed Marriages</p>
          
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
