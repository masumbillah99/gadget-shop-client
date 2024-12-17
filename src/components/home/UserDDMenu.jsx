import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userIcon from "../../assets/icon/user.png"
import toast from "react-hot-toast";


const DropDown = () => {
    const { user, logoutUser } = useAuth();
    // console.log(user);

    const logoutHandler = () => {
        logoutUser()
            .then(() => toast.success("logout successful"))
            .catch((err) => toast.error(err.message))
    }

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL || userIcon} />
                    </div>
                </div>
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content menu gap-4 bg-base-100 rounded-box z-[1] w-40 shadow font-bold"
            >
                <li>
                    <Link to={'/dashboard'}  className="hover:bg-[#fff]">Dashboard</Link>
                </li>
                <li>
                    <button onClick={logoutHandler} className="btn btn-warning btn-sm py-1">Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default DropDown;