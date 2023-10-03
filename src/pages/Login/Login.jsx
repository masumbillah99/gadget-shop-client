import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-32 text-center">
      <h5 className="text-2xl font-bold">Sign up or create a account</h5>
      <div>
        <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="enter your email address"
              className="input input-bordered focus:outline-none"
              required
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
              required
            />
          </div>
          <label className="label font-semibold">
            <Link className="label-text-alt link link-hover underline">
              Forgot password?
            </Link>
          </label>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="px-3">
          <p>
            Already have an account? please login or sign in{" "}
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
