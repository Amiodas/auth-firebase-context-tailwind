import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const navigate = useNavigate();
  const { user, success, error, errorMessage, loading, createUser } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email, password);
    event.target.reset();
    console.log(name, email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
            <p className="text-center mt-3">
              Already registered
              <Link to="/login" className="link link-hover">
                {" "}
                login now.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
