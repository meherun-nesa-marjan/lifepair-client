import  { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { MdEditDocument, MdFavorite, MdViewCarousel } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const UsersDashboard = () => {
    const { user,signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            navigate("/");
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className='bg-red-800 text-white'>

           

            <aside className="bg-red-800 text-white w-72">
                <div className="min-h-screen px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <div className="flex items-center space-x-4 p-4">
                        <img
                            src={user?.photoURL || '/default-avatar.png'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className=" dark:text-white">{user?.displayName || 'User Name'}</span>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={'/'} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <IoIosHome />
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Dashboard/Edit'} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdEditDocument />
                                <span className="flex-1 ms-3 whitespace-nowrap">Edit Biodata</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to={`/Dashboard/myBiodata/${user?.email}`} className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdViewCarousel />
                                <span className="flex-1 ms-3 whitespace-nowrap">View Biodata</span>
                               
                            </Link>
                        </li>
                        <li>
                            <Link to={`/Dashboard/ContactRequests/${user?.email}`} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <RiContactsFill />
                                <span className="flex-1 ms-3 whitespace-nowrap">My Contact Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/Dashboard/favoritebiodatas/${user?.email}`} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdFavorite />
                                <span className="flex-1 ms-3 whitespace-nowrap">Favourites Biodata.</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleSignOut} className="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <FaSignOutAlt />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                            </button>
                            
                        </li>
                        <li>
                           
                        </li>
                    </ul>
                </div>
            </aside>

        </div>
    );
};

export default UsersDashboard;