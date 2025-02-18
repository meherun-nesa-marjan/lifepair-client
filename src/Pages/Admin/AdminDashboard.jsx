import { useContext, useState, useEffect, useRef } from 'react'; // Importing necessary hooks
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { MdEditDocument, MdViewCarousel } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaPersonRifle } from 'react-icons/fa6';

const AdminDashboard = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);

    const handleSignOut = async () => {
        try {
            navigate('/');
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar if user clicks outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close sidebar after selecting a menu item
    const closeSidebarAndNavigate = (path) => {
        setIsSidebarOpen(false);
        navigate(path);
    };

    return (
        <div className="text-white dark:bg-gray-900 dark:text-white">
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 h-screen bg-red-800 text-white w-72 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                    <div className="flex items-center space-x-4 p-4">
                        <img
                            src={user?.photoURL || '/default-avatar.png'}
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="dark:text-white">{user?.displayName || 'User Name'}</span>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={'/Dashboard/AdminHome'}
                                onClick={() => closeSidebarAndNavigate('/Dashboard/AdminHome')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <IoIosHome />
                                <span className="ms-3">Admin Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/Dashboard/ProfilePage'}
                                onClick={() => closeSidebarAndNavigate('/')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group"
                            >
                                <FaPersonRifle />
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Dashboard/ManageUsers'}
                                onClick={() => closeSidebarAndNavigate('/Dashboard/ManageUsers')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <MdEditDocument />
                                <span className="flex-1 ms-3 whitespace-nowrap">Manage Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Dashboard/ApprovedPremium'}
                                onClick={() => closeSidebarAndNavigate('/Dashboard/ApprovedPremium')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <MdViewCarousel />
                                <span className="flex-1 ms-3 whitespace-nowrap">Approved Premium</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Dashboard/ContactRequestApproved'}
                                onClick={() => closeSidebarAndNavigate('/Dashboard/ContactRequestApproved')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <RiContactsFill />
                                <span className="flex-1 ms-3 whitespace-nowrap">Approved Contact Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Dashboard/AdminSuccessStories'}
                                onClick={() => closeSidebarAndNavigate('/Dashboard/AdminSuccessStories')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <RiContactsFill />
                                <span className="flex-1 ms-3 whitespace-nowrap">Success Stories</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}
                                onClick={() => closeSidebarAndNavigate('/')}
                                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <RiContactsFill />
                                <span className="flex-1 ms-3 whitespace-nowrap">Go Home</span>
                            </Link>
                        </li>
                        <li>
                            <div className="p-2 rounded-lg dark:text-white hover:bg-red-400 dark:hover:bg-gray-700 group">
                                <button onClick={handleSignOut} className="flex items-center">
                                    <FaSignOutAlt />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>




    );
};

export default AdminDashboard;





