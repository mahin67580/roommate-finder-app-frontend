
import { Link, NavLink } from 'react-router';
import navlogo from '../assets/Animation - 1746735500248 (1).gif'
import usericon from '../assets/profile.png'
import { AuthContext } from '../Provider/AuthContext';
import { use } from 'react';
import Swal from 'sweetalert2';
const Navbar = () => {


    const { user, logout } = use(AuthContext)



    const handleLogout = () => {

        logout()
            .then(() => {
              
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout  successful",
                    showConfirmButton: false,
                    timer: 1500
                });

            }).catch(() => {
                // console.log(error);
            });
    }




    const Links = <>
        <NavLink to={'/'} className={'  btn text-black px-3 py-1 rounded hover:bg-blue-200 transition  mr-5 font-semibold duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  '}>Home</NavLink>
        <NavLink to={'/AddToFindRoommate'} className={'btn text-black px-3 py-1 rounded hover:bg-blue-200 transition mr-5 font-semibold duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'}>Add to Find Roommate</NavLink>
        <NavLink to={'/BrowseListing'} className={'btn text-black px-3 py-1 rounded hover:bg-blue-200 transition mr-5 font-semibold duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'}>Browse Listing</NavLink>
        <NavLink to={'/MyListings'} className={'btn text-black px-3 py-1 rounded hover:bg-blue-200 transition  mr-5 font-semibold duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'}>My Listings</NavLink>
        {
            user ? (<NavLink to={'/myprofile'} className="btn text-black px-3 py-1 rounded hover:bg-blue-200 transition font-semibold duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  "> My profile </NavLink  >) : ''
        }
    </>





    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content space-y-4   bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                Links
                            }

                        </ul>
                    </div>
                    <div className='flex items-center'>

                        {
                            <Link to={'/'}> <p className="btn btn-ghost text-xl text-green-600">Grab<span className='text-black'>Roommate</span></p></Link>
                        }
                        <img className='w-9' src={navlogo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {
                            Links
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <p>{user && user.email}</p> */}

                    <div className="relative group flex flex-row-reverse  items-center mr-3  ">
                        <div className="ring-primary ring-offset-base-100 w-12 h-12 rounded-full ring-2 ring-offset-2 overflow-hidden">
                            <img src={user ? user.photoURL : usericon} className="object-cover w-full h-full" />
                        </div>

                        <span className=" text-sm font-medium mr-4 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                            {user?.displayName}
                        </span>
                    </div>



                    {
                        user ? (<Link to={'/'}><button onClick={handleLogout} className="btn bg-green-500 text-white">Logout</button></Link>) : (<Link to={'/login'} className="btn bg-green-500 text-white "> Login </Link  >)
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;