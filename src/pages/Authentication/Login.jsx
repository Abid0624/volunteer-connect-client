import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottieData from "../../assets/lottie/login.json";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  // Email Password Signin
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log({ email, pass });
    try {
      //User Login
      await signIn(email, pass);
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      toast.success("Signin Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
        <div className="text-center flex-1/2 lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card flex-1/2 text-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl my-3 font-bold">Login now!</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-accent mt-4"
              >
                Sign With Google
              </button>
              <div className="text-base my-2">
                <p>
                  Doesn't have an account?{" "}
                  <span className="underline text-red-600 font-semibold">
                    <Link to="/register">Register</Link>
                  </span>{" "}
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
