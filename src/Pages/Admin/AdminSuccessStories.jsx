import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";



const modalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        position: "relative",
        inset: "unset", 
        padding: "20px",
        maxWidth: "90%",
        maxHeight: "90%", 
        overflowY: "auto", 
        borderRadius: "10px",
        border: "1px solid #ccc",
        backgroundColor: "#f8fafc", 
    },
};

const AdminSuccessStories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStory, setSelectedStory] = useState(null);
   
    const { data: successStories = [], isLoading, isError, error } = useQuery({
        queryKey: ["successStories"],
        queryFn: async () => {
            const res = await axios.get("https://life-pair-server.vercel.app/allsuccessstories");
            return res.data;
        },
    });

    const openModal = (story) => {
        setSelectedStory(story);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedStory(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
                Success Stories: {successStories.length}
            </h1>

            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left border-b">Male Biodata Id</th>
                        <th className="px-4 py-2 text-left border-b">Female Biodata Id</th>
                        <th className="px-4 py-2 text-left border-b">View Story</th>
                    </tr>
                </thead>
                <tbody>
                    {successStories.map((story) => (
                        <tr key={story._id}>
                            <td className="px-4 py-2 border-b">{story.selfBiodataId}</td>
                            <td className="px-4 py-2 border-b">{story.partnerBiodataId}</td>
                            <td className="px-4 py-2 border-b">
                                <button
                                    onClick={() => openModal(story)}
                                    className="btn btn-primary text-green-700"
                                >
                                    View Story
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Success Story Modal"
                ariaHideApp={false}
                className="relative z-[1100] max-w-full bg-slate-100 rounded-lg shadow-xl p-6"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            >
                <h2 className="text-2xl font-bold mb-4">Success Story</h2>
                {selectedStory && (
                    <>
                        <p>
                            <strong>Marriage Date:</strong>{" "}
                            {new Date(selectedStory.marriageDate).toLocaleDateString()}
                        </p>
                        <div className="flex space-x-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`text-2xl ${star <= selectedStory.reviewStar
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="mt-4">{selectedStory.successStoryReview}</p>
                        <div className="mt-6">
                            <button
                                onClick={closeModal}
                                className="px-6 py-3 bg-emerald-700 rounded text-white"
                            >
                                Close
                            </button>
                        </div>
                    </>
                )}
            </Modal>

        </div>
    );
};

export default AdminSuccessStories;
