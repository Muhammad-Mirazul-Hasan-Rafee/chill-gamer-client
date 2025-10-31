import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-20">
      
      {/* Left side text */}
      <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
        <h4 className="text-3xl font-semibold text-gray-400 leading-snug">
          Sign up here to explore more gaming info and give your feedback
        </h4>
      </div>

      {/* Right side form */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full max-w-sm shadow-2xl bg-base-100 rounded-lg p-6 -mt-6 lg:-mt-12">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Create a new Account!</h1>
          </div>

          <form className="">
            {/* first row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* second row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photourl"
                  name="photourl"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            {/* forgot + login */}
            <div className="flex justify-between items-center text-sm mt-3 flex-wrap gap-y-2 w-auto">
              <a href="#" className="label-text-alt link link-hover text-[13px]">
                Forgot password?
              </a>
              <p className="text-right">
                Already have an Account?{" "}
                <Link to="/signin" className="text-blue-500 hover:underline">
                  Log in here
                </Link>
              </p>
            </div>

            <div className="mt-5 flex justify-end">
              <button className="btn btn-primary w-28 h-10">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
