import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DropDown from "../home/UserDDMenu";

const Navbar = () => {
    const { user } = useAuth();

    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold uppercase">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact-us'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <NavLink to={'/'}><h4 className="logo-font">Gadget Store</h4></NavLink>

            </div>

            <div className="navbar-center hidden lg:flex uppercase font-semibold">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact-us'}>Contact</NavLink>
                    </li>
                </ul>
            </div>

            {user ?
                <div className="navbar-end">
                    <DropDown />
                </div>
                :
                (<div className="navbar-end">
                    <div className="flex items-center gap-4">
                        <Link to={'/login'}>
                            <button className="btn btn-primary px-5 uppercase">Login</button>
                        </Link>
                        <Link to={'/register'}>
                            <button className="btn btn-outline btn-primary uppercase">Register</button>
                        </Link>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Navbar;