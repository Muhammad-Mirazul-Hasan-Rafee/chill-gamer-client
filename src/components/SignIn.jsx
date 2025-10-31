import { Link } from "react-router-dom";
import google from '../assets/googleIcon.png';
import github from '../assets/github.png';

const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      {/* 🔆 Border animation style */}
      <style>{`
        @keyframes moveLight {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }

        .light-border {
          position: relative;
          border: 2px solid rgba(251, 191, 36, 0.4);
          border-radius: 12px;
          overflow: hidden;
        }

        .light-border::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(251, 191, 36, 1);
          border-radius: 50%;
          offset-path: path("M5 5 H calc(100% - 5) V calc(100% - 5) H 5 Z");
          offset-distance: 0%;
          animation: moveLight 4s linear infinite;
          filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.8));
        }
      `}</style>

      {/* 🔹 Responsive layout */}
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-10 px-4 text-center lg:text-left">
        
        {/* 🟡 RIGHT SIDE (Desktop) */}
        <div className="w-full max-w-md flex flex-col items-center lg:items-start">
          {/* 🔸 This heading will move ABOVE form in mobile */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 order-1 lg:order-none">
            Login now!
          </h1>

          {/* 🔸 This paragraph will go BELOW form in mobile */}
          <p className="text-sm lg:text-base leading-relaxed mt-6 lg:mt-0 order-3 lg:order-none">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* 🟢 LEFT SIDE FORM */}
        <div className="light-border card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 order-2">
          <form className="card-body">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              {/* Forgot + Sign Up */}
              <div className="flex justify-between items-center text-sm mt-3 flex-wrap gap-y-2">
                <a href="#" className="label-text-alt link link-hover text-[13px]">
                  Forgot password?
                </a>
                <p className="text-right text-[13px]">
                  New Comer?{" "}
                  <Link to="/signup" className="text-blue-500 hover:underline">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="form-control mt-6 flex justify-between">
              <button className="btn btn-primary w-24 h-10">Login</button>
              <div className="flex items-center w-auto"><p>Log in with</p>{} <img className="w-8 h-8 rounded-full" src={google} alt="" /><span> ||</span> <img className="w-8 h-8 rounded-full" src={github} alt="" /></div>
             
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
