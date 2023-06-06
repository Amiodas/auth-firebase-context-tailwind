import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError(false);
        setSuccess(true);
        setLoading(false);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
      });
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/forget_password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            {success ? (
              <p className="bg-success rounded text-white text-center p-3 mt-4">
                User registration successfully
              </p>
            ) : (
              ""
            )}
            {error ? (
              <p className="bg-error text-white text-center rounded p-3 mt-4">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <p className="text-center mt-3">
              New to here
              <Link to="/register" className="link link-hover">
                {" "}
                Register now.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
