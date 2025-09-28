import { useState, useEffect } from "react";

function NavbarPage() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-10">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">

                {/* Logo Section */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        className="w-10 h-10 rounded-full object-cover" // logo size একটু ছোট করা
                        src="/public/images/Ac.jpg"
                        alt="Logo"
                    />
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                        Brooklyn
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 
                        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                        focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
                        dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Nav Links + Small Dark Mode Toggle */}
                <div className="hidden  md:flex md:items-center md:space-x-2" id="navbar-default"> {/* space কমানো */}
                    <ul className="font-medium flex flex-row space-x-4 p-0 m-0 bg-transparent dark:bg-gray-900"> {/* সব inline 1 line */}
                        <li>
                            <a
                                href="#"
                                className="text-white bg-purple-500 rounded-md px-2 py-1 md:bg-transparent md:text-purple-700 dark:text-white md:dark:text-purple-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#process"
                                className="text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Work Process
                            </a>
                        </li>
                        <li>
                            <a
                                href="#project"
                                className="text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                My Project
                            </a>
                        </li>
                        <li>
                            <a
                                href="#office"
                                className="text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                My Office
                            </a>
                        </li>

                        {/* Small Dark Mode Toggle */}
                        <li>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            >
                                {darkMode ? "☀️" : "🌙"}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPage;
