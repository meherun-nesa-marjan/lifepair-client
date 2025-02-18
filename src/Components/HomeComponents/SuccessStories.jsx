import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SuccessStories = () => {
    const { data: successStories = [], isLoading, isError, error } = useQuery({
        queryKey: ["successStories"],
        queryFn: async () => {
            const res = await axios.get("https://life-pair-server.vercel.app/allsuccessstories");
            return res.data;
        },
    });

    if (isLoading) {
        return <div className="text-center text-gray-500">Loading success stories...</div>;
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Error: {error?.message || "An error occurred while fetching the data."}
            </div>
        );
    }

    if (successStories.length === 0) {
        return <div className="text-center text-gray-500">No success stories available.</div>;
    }

    return (
        <div className="w-11/12 mx-auto my-10 px-4 py-10 bg-pink-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Marriage Success Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story) => {
                    const { _id, coupleImageLink, selfBiodataId, partnerBiodataId, marriageDate, reviewStar, successStoryReview } = story;

                    // Handle fallback values for `reviewStar` and `marriageDate`
                    const validReviewStar = typeof reviewStar === 'number' && reviewStar >= 1 && reviewStar <= 5 ? reviewStar : 0; // Default to 0
                    const validMarriageDate = marriageDate ? new Date(marriageDate).toLocaleDateString() : "Date not available"; 

                    return (
                        <div key={_id} className="bg-white shadow-md rounded-lg p-4">
                            <div className="flex flex-col items-center space-y-4">
                                {/* Couple Image */}
                                <img
                                    src={coupleImageLink || "https://via.placeholder.com/150"}
                                    alt={`Couple Image for ${selfBiodataId} & ${partnerBiodataId}`}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                {/* Marriage Date */}
                                <p className="text-gray-600 text-sm">
                                    <strong>Marriage Date:</strong> {validMarriageDate}
                                </p>
                                {/* Review Stars */}
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-xl ${star <= validReviewStar ? "text-yellow-400" : "text-gray-300"}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                {/* Success Story Review */}
                                <p className="text-gray-700 text-center">{successStoryReview}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SuccessStories;
