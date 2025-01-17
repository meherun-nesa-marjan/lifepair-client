import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { MdEditDocument, MdFavorite, MdViewCarousel } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const UsersDashboard = () => {
    const { user,signOutUser } = useContext(AuthContext);
    console.log(user)
    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className='bg-red-800 text-white'>

           

            <aside class="bg-red-800 text-white w-72 h-screen">
                <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <div className="flex items-center space-x-4 p-4">
                        <img
                            src={user?.photoURL || '/default-avatar.png'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className=" dark:text-white">{user?.displayName || 'User Name'}</span>
                    </div>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to={''} class="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <IoIosHome />
                                <span class="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdEditDocument />
                                <span class="flex-1 ms-3 whitespace-nowrap">Edit Biodata</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdViewCarousel />
                                <span class="flex-1 ms-3 whitespace-nowrap">View Biodata</span>
                               
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <RiContactsFill />
                                <span class="flex-1 ms-3 whitespace-nowrap">My Contact Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <MdFavorite />
                                <span class="flex-1 ms-3 whitespace-nowrap">Favourites Biodata.</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleSignOut} class="flex items-center p-2  rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                            <FaSignOutAlt />
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
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