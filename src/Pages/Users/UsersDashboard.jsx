import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { MdEditDocument, MdFavorite, MdViewCarousel } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const UsersDashboard = () => {
    return (
        <div>

            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <Link to={'/'} class="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <IoIosHome />
                                <span class="ms-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdEditDocument />
                                <span class="flex-1 ms-3 whitespace-nowrap">Edit Biodata</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdViewCarousel />
                                <span class="flex-1 ms-3 whitespace-nowrap">View Biodata</span>
                               
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <RiContactsFill />
                                <span class="flex-1 ms-3 whitespace-nowrap">My Contact Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdFavorite />
                                <span class="flex-1 ms-3 whitespace-nowrap">Favourites Biodata.</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={''} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaSignOutAlt />
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                            </Link>
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