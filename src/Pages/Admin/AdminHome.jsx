import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);
const AdminHome = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["biodataCounts"],
        queryFn: async () => {
            const res = await axios.get("https://life-pair-server.vercel.app/biodataCounts");
            return res.data;
        },
    });

    if (isLoading) {
        return <div className="text-center text-gray-500">Loading data...</div>;
    }

    if (isError) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }
    const totalBiodata = data.boysBiodata + data.girlsBiodata;
  
    const chartData = {
        labels: [
            "Male Biodata",
            "Female Biodata",
            "Premium Biodata",
            "Total Revenue",
        ],
        datasets: [
            {
                data: [
                    data.boysBiodata, 
                    data.girlsBiodata, 
                    data.premiumBiodata, 
                    data.totalrevenue, 
                ],
                backgroundColor: [
                    "#3498db", 
                    "#e74c3c", 
                    "#2ecc71", 
                    "#f39c12", 
                ],
                hoverBackgroundColor: [
                    "#2980b9", 
                    "#c0392b", 
                    "#27ae60", 
                    "#e67e22", 
                ],
                borderColor: "#fff",
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="max-w-7xl dark:bg-gray-900 dark:text-white mx-auto mt-10 px-4 py-6 bg-gray-100 rounded-lg shadow-lg">

            <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Biodata Count */}
                <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Total Biodata</h2>
                    <p className="text-3xl">{totalBiodata}</p>
                </div>

                {/* Male Biodata Count */}
                <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Male Biodata</h2>
                    <p className="text-3xl">{data.boysBiodata}</p>
                </div>

                {/* Female Biodata Count */}
                <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Female Biodata</h2>
                    <p className="text-3xl">{data.girlsBiodata}</p>
                </div>

                {/* Premium Biodata Count */}
                <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Premium Biodata</h2>
                    <p className="text-3xl">{data.premiumBiodata}</p>
                </div>

                {/* Total Revenue */}
                <div className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-xl font-bold mb-2">Total Revenue</h2>
                    <p className="text-3xl">${data.totalrevenue}</p>
                </div>
            </div>

            {/* Pie Chart */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center mb-4">Biodata and Revenue Distribution</h2>
                <div className="flex justify-center">
                    <Pie
                        data={chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false, 
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            },
                           
                            elements: {
                                arc: {
                                    borderWidth: 1, 
                                },
                            },
                        }}
                        height={250} 
                        width={250}  
                    />
                </div>
            </div>

        </div>
    );
};

export default AdminHome;