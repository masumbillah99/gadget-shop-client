import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
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
              {...register("user_email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
              {...register("user_photo")}
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
              {...register("password", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered focus:outline-none"
              {...register("confirm_password", { required: true })}
            />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
        <div className="px-3">
          <p>
            Already have an account? please login or sign in{" "}
            <Link to="/login" className="underline text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
