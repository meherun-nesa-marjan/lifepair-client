import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const GotMarried = () => {
    const axiosSecure = useAxiosSecure();
    const [formData, setFormData] = useState({
        selfBiodataId: "",
        partnerBiodataId: "",
        coupleImageLink: "",
        successStoryReview: "",
        marriageDate: "",
        reviewStar: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStarChange = (star) => {
        setFormData({ ...formData, reviewStar: star });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosSecure
            .post("/successstories", formData)
            .then((response) => {
                console.log("Saved success-stories:", response.data);
                Swal.fire("Success", "Success story saved successfully!", "success");
                setFormData({
                    selfBiodataId: "",
                    partnerBiodataId: "",
                    coupleImageLink: "",
                    successStoryReview: "",
                    marriageDate: "",
                    reviewStar: 0,
                });
            })
            .catch((error) => {
                console.error("Error response:", error.response);
                Swal.fire(
                    "Error",
                    error.response?.data?.message || "Failed to save success story",
                    "error"
                );
            });
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Got Married? Share Your Success Story!</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="selfBiodataId" className="block text-sm font-medium mb-1">
                        Self Biodata ID
                    </label>
                    <input
                        type="text"
                        id="selfBiodataId"
                        name="selfBiodataId"
                        value={formData.selfBiodataId}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="partnerBiodataId" className="block text-sm font-medium mb-1">
                        Partner Biodata ID
                    </label>
                    <input
                        type="text"
                        id="partnerBiodataId"
                        name="partnerBiodataId"
                        value={formData.partnerBiodataId}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="coupleImageLink" className="block text-sm font-medium mb-1">
                        Couple Image Link
                    </label>
                    <input
                        type="url"
                        id="coupleImageLink"
                        name="coupleImageLink"
                        value={formData.coupleImageLink}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="successStoryReview" className="block text-sm font-medium mb-1">
                        Success Story Review
                    </label>
                    <textarea
                        id="successStoryReview"
                        name="successStoryReview"
                        value={formData.successStoryReview}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="marriageDate" className="block text-sm font-medium mb-1">
                        Marriage Date
                    </label>
                    <input
                        type="date"
                        id="marriageDate"
                        name="marriageDate"
                        value={formData.marriageDate}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Review Star</label>
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => handleStarChange(star)}
                                className={`h-8 w-8 rounded-full ${
                                    formData.reviewStar >= star
                                        ? "bg-yellow-400"
                                        : "bg-gray-300"
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
                <button type="submit" className="bg-red-800 text-white py-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GotMarried;
