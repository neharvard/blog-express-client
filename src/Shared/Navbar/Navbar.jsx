import { Link, NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProvider";
// import ThemeContext, { useTheme } from "../../../Theme/ThemeContext";


const Navbar = () => {

    //const { theme, toggleTheme } = useTheme(); // Use the useTheme hook
    // const { toggleTheme } = useTheme(); // Use the useTheme hook
    // console.log('navbarTheme: ', toggleTheme);
    // const { theme, toggleTheme } = useContext(ThemeContext);


    const { user, logOut } = useContext(AuthContext);
    // console.log('navbar user: ', user);
 
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/services'>Services</NavLink></li> */}
        {/* <li><a href="/#addProduct">Add Product</a></li> */}
        <li><NavLink to="/addBlog">Add Blog</NavLink></li>
        <li><NavLink to="/allBlog">All blogs</NavLink></li>
        <li><NavLink to="/featuredBlogs">Featured Blogs </NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {/* <li><NavLink to='/login'>Login</NavLink></li> */}
    </>

    return (
        <div className="navbar bg-base-100 mt-7">
            {/* <h2>THIS is Navar</h2> */}
            <div className="navbar-start">
                <div className="flex gap-5">
                    {/* <FaBloggerB></FaBloggerB> */}
                    <p className="text-4xl ml-8 font-extrabold italic font-serif">
                        <span className="text-pink-400">B</span>log Express</p>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src='https://i.ibb.co/Q6KWgsc/user.png' />
                    </div>
                </label>
                {
                    user ? (
                        <>
                            {/* <span>{user.email}</span> */}
                            {/* <span>{user.name}</span> */}
                            <button
                                onClick={handleLogOut}
                                className="btn">Log Out</button>
                        </>
                    ) : (
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                    )
                }

                {/* {
                    userDetails ? (
                        <>
                            <span>{userDetails.photo}</span>
                            <span>{userDetails.name}</span>
                            <button
                                onClick={handleLogOut}
                                className="btn">Log Out</button>
                        </>
                    ) : (
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                    )
                } */}

                

                {/* new add */}
                <button //onClick={toggleTheme} 
                    className="ml-4 btn btn-circle theme-toggle">
                    {/* {theme === "dark" ? <FiSun /> : <FiMoon />} */}
                    <FiSun />  <FiMoon />
                </button>
                {/* <button onClick={toggleTheme} className="btn btn-circle theme-toggle">
                    Toggle Theme
                </button> */}

            </div>
        </div>
    );
};

export default Navbar;
















