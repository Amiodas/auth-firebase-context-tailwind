import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-6 pt-3 pb-16 text-center">
      <h3 className="text-3xl">Hello {user?.email}, Welcome back to the site.</h3>
      <h3 className="text-2xl mt-5">This is home.</h3>
      <p className="mt-5">Content coming soon be with us.</p>
      <div className="flex justify-center mt-6 mb-10">
        <img width="400px" src="/public/images/Home.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
