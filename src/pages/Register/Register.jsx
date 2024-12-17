import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/reg-login/GoogleLogin";


const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();


  const registerHandler = (data) => {
    const { name, email, password, role } = data;
    console.log(data);

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     if (result?.user) {
    //       updateUserProfile(name, "").then(() => {
    //         toast.success("user register successful");
    //         navigate("/");
    //       })
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err?.message);
    //   })

  }

  return (
    <div className="hero min-h-screen my-20 lg:my-0">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-28">

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register For New Journey</h1>
          <p className="py-6 italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, reprehenderit. Temporibus mollitia commodi laudantium odio modi culpa excepturi, illo delectus necessitatibus perferendis fugiat porro. Est qui tempore laudantium reiciendis quod expedita voluptates, animi neque iste. Quos pariatur, non reiciendis libero facilis, aut tempore obcaecati aspernatur perspiciatis at veritatis, dicta eos!
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(registerHandler)}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="name"
                placeholder="write your name"
                className="input input-bordered focus:outline-none"
                {...register("name", { required: true })}
              />

              {errors?.name && (
                <p className="text-red-500 text-sm font-light">
                  Name is required
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered focus:outline-none"
                {...register("email", { required: true })}
              />

              {errors?.email && (
                <p className="text-red-500 text-sm font-light">
                  Email is required
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered focus:outline-none"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />

              {errors?.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is required
                </p>
              )}

              {errors?.password?.type === "minLength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must have at least 6 characters
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered focus:outline-none"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch('password') !== value) {
                      return "Your password do not match";
                    }
                  }
                })}
              />

              {errors?.confirmPassword && (
                <p className="text-red-500 text-sm font-light">
                  Both password must match
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Role</span>
              </label>
              <select className="select select-bordered focus:outline-none w-full max-w-xs"
                {...register("role", { required: true })}
              >
                <option value={'buyer'}>Buyer</option>
                <option value={'seller'}>Seller</option>
              </select>

              {errors?.role && (
                <p className="text-red-500 text-sm font-light">
                  You must select a role
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary uppercase">Register</button>
            </div>

            <GoogleLogin />

            <p className="ml-8 mb-2 mt-3 text-sm font-medium">
              Already have an account?
              <Link
                to={'/login'}
                className="hover:underline font-medium text-purple-700 ml-1"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;