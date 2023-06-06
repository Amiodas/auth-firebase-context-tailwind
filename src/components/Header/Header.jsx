import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Auth-Context</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>{user ? <span>{user?.email}</span> : ""}</li>
            <li>
              {user ? (
                <button onClick={handleLogout} className="btn btn-sm">Logout</button>
              ) : (
                <details>
                  <summary>Profile</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </details>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
