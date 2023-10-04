import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { imageUpload } from "../../apis/utils";
import { toast } from "react-toastify";

const SignUp = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    event.preventDefault();

    if (data.password !== data.confirm_password) {
      setError("your password does not match");
      return;
    }

    imageUpload(data.user_photo[0]).then((imgRes) => {
      const userData = {
        user_email: data.user_email,
        password: data.password,
        user_photo: imgRes?.data?.display_url,
        role: "user",
      };

      fetch(`${import.meta.env.VITE_SERVER_URL}/sign-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log("from result", result);
          if (result.message) {
            return toast.error(result.message);
          }

          if (result.insertedId) {
            toast.success("user sign up successfully");
            reset();
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <section className="max-w-screen-xl mx-auto my-28 text-center">
      <h5 className="text-2xl font-bold">Sign up or create a account</h5>
      <div>
        <form
          onSubmit={handleSubmit(handleSignUp)}
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
            {errors?.user_email && (
              <p className="text-error text-left mt-1">
                {errors?.user_email?.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
              {...register("user_photo", {
                // required: { value: true, message: "user photo is required" },
              })}
            />
            {/* {errors?.user_photo && (
              <p className="text-error text-left mt-1">
                {errors?.user_photo?.message}
              </p>
            )} */}
          </div>

          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">New Password</span>
            </label>
            <div className="flex items-center relative">
              <input
                type={show ? "text" : "password"}
                placeholder="enter new password"
                className="input input-bordered focus:outline-none w-full"
                {...register("password", {
                  required: { value: true, message: "password is required" },
                })}
              />
              <small
                className="absolute right-2 text-xl cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </small>
            </div>

            {errors?.password && (
              <p className="text-error text-left mt-1">
                {errors?.password?.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={"password"}
              placeholder="confirm password"
              className="input input-bordered focus:outline-none w-full"
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "confirm password is required",
                },
              })}
            />
            {errors?.confirm_password && (
              <p className="text-error text-left mt-1">
                {errors?.confirm_password?.message}
              </p>
            )}
            {error && <p className="text-error text-left mt-1">{error}</p>}
          </div>

          <div className="form-control mt-2">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
        <div className="px-3">
          <p>
            Already have an account? please{" "}
            <Link to="/login" className="underline text-primary">
              Login or SignIn
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
