import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {
  const { createUser } = useAuth();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-28">

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register For New Journey</h1>
          <p className="py-6 italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, reprehenderit. Temporibus mollitia commodi laudantium odio modi culpa excepturi, illo delectus necessitatibus perferendis fugiat porro. Est qui tempore laudantium reiciendis quod expedita voluptates, animi neque iste. Quos pariatur, non reiciendis libero facilis, aut tempore obcaecati aspernatur perspiciatis at veritatis, dicta eos!
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="confirm password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary uppercase">Register</button>
            </div>
          </form>

          <p className="ml-8 mb-6 text-sm font-light">Already have an account? <Link to={'/login'} className="hover:underline font-medium text-purple-700">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register;