import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { logout } from "../actions/userAction"
import { useAlert } from "react-alert";

const Profile = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const logOutUser = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="profile-heading">
            <h1>My Profile</h1>
          </div>
          <div className="profileContainer">
            <div>
              <div className="profile-subcont">
                <h2>Full Name</h2>
                <p>{user.name}</p>
              </div>
              <div className="profile-subcont">
                <h2>Email</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="profile-button-cont">
              <div className="profile-button">
                <Link to="/" onClick={logOutUser}>
                  Logout
                </Link>
              </div>
              <div className="profile-button">
                <Link to="/orders">My Orders</Link>
              </div>
              <div className={"profile-button"}
              style={
                user.role === "admin" ? {display: "block"} : {display: "none"}
              }>
                <Link to="/admin/dashboard">Dashboard</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;