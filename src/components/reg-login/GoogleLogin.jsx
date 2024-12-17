import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res);
                toast.success("google login successful");
                navigate('/');
            })
            .catch((err) => toast.error(err.message))
    }

    return (
        <>
            <div className="divider">OR</div>

            <button
                type="button"
                onClick={handleGoogleLogin} 
                className="border border-orange-300 hover:bg-[#E7A500] hover:text-white s:outline-none rounded-lg px-5 py-3 text-black font-bold text-center"
            >
                <FcGoogle className="inline w-[20px] me-1 mb-1" />
                <span>Google</span>
            </button>
        </>
    )
}

export default GoogleLogin;
