import React from "react";

const ForgetPassword = () => {
  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    console.log(email);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Want to reset password?</h1>
          <p className="py-6">
            Type your valid email and check it out to your account here yu found
            a link, click there and change your old password and come again and
            login.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleResetPassword} className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
