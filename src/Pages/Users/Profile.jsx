import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div className="p-6">
                
                <div className="max-w-4xl min-h-screen mx-auto my-8 p-6 bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-red-700">Your Profile Info</h2>
                <div className="flex items-center space-x-4 p-4">
                        <img
                            src={user?.photoURL || '/default-avatar.png'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="dark:text-white">{user?.displayName || 'User Name'}</span>
                    </div>                   

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold border-b pb-2 mb-4">
                            Contact Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Profile;