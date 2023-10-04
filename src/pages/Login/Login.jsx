import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser, loading } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [errMsg, setErrMsg] = useState("");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    event.preventDefault();
    const userData = {
      user_email: data.user_email,
      password: data.password,
    };

    signInUser(userData)
      .then((result) => {
        // console.log("from login", result);
        if (result.message) {
          toast.error(result.message);
          setErrMsg(result.message);
        }
        if (result.status === "success") {
          toast.success("user login successfully");
          window.localStorage.setItem("trip-aero-token", result.token);
          window.localStorage.setItem("aero-logged-in", true);
          reset();
          navigate("/");
        }
      })
      .catch((err) => toast.error(err));
  };

  const handleCheck = () => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto my-32 text-center">
      <h5 className="text-2xl font-bold">Sign up or create a account</h5>
      <div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="enter your email address"
              className="input input-bordered focus:outline-none"
              {...register("user_email", {
                required: { value: true, message: "user email is required" },
              })}
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="enter new password"
              className="input input-bordered focus:outline-none"
              {...register("password", {
                required: { value: true, message: "password is required" },
              })}
            />
            {errMsg && (
              <span className="text-error text-left font-semibold mt-1">
                {errMsg}
              </span>
            )}
          </div>
          <label className="label font-semibold">
            <Link className="label-text-alt link link-hover underline">
              Forgot password?
            </Link>
          </label>
          <div className="form-control flex-row items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              onClick={handleCheck}
            />
            <label className="label">
              <span className="label-text font-semibold">Remember me</span>
            </label>
          </div>
          <div className="form-control mt-2">
            <button
              className="btn btn-primary disabled:bg-indigo-500"
              disabled={check}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <span className="loading loading-infinity loading-md"></span>
                  Loading...
                </div>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="px-3">
          <p>
            New in TripAero? Create a free account{" "}
            <Link to="/sign-up" className="underline text-primary">
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
