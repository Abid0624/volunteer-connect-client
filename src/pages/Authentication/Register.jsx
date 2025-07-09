import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/lottie/register.json";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const pass = form.password.value;
    console.log({ email, pass, name, photo });

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(pass)) {
      alert(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
    }

    // create user
    try {
      //  User Registration
      const result = await createUser(email, pass);
      console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });

      toast.success("Signup Successful");
      navigate("/");
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
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card flex-1/2 text-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl my-3 font-bold">Register now!</h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
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

              <button className="btn btn-neutral mt-4">Register</button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-accent mt-4"
              >
                Sign With Google
              </button>
              <div className="text-base my-2">
                <p>
                  Already have an account?{" "}
                  <span className="underline text-red-600 font-semibold">
                    <Link to="/login">Login</Link>
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

export default Register;
