import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/reg-login/GoogleLogin";

const Login = () => {
    const { loginUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();

    const loginHandler = (data) => {
        const { email, password } = data;

        loginUser(email, password)
            .then(() => {
                toast.success("user login successful");
                navigate("/");
            })
            .catch((err) => toast.error(err?.message))
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login For Continue</h1>
                    <p className="py-6 italic">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, reprehenderit. Temporibus mollitia commodi laudantium odio modi culpa excepturi, illo delectus necessitatibus perferendis fugiat porro. Est qui tempore laudantium reiciendis quod expedita voluptates, animi neque iste. Quos pariatur, non reiciendis libero facilis, aut tempore obcaecati aspernatur perspiciatis at veritatis, dicta eos!
                    </p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(loginHandler)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
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
                                className="input input-bordered"
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

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary uppercase">Login</button>
                        </div>

                        <GoogleLogin />
                        <p className="ml-8 mb-2 mt-3 text-sm font-medium">
                            New in Gadget Store?
                            <Link to={'/register'}
                                className="hover:underline font-medium text-purple-700 ml-1"
                            >
                                Register
                            </Link>
                        </p>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login;