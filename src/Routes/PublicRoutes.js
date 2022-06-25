import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Auth/Login";
import TopMenu from "../Components/Common/TopMenu/TopMenu";
import Certificates from "../Components/Pages/Certificates/Certificates";
import Secretaries from "../Components/Pages/Secretaries/Secretaries";
import Students from "../Components/Pages/Students/Students";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import NotFound from "../Components/Pages/404/NotFound";

const PublicRoutes = ({ ...props }) => {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <div className="page--container">
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/login" />} />
            <Route
              exact
              path="/login"
              element={
                props.isLoggedIn ? (
                  <Navigate replace to="/students" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="/students"
              element={
                !props.isLoggedIn ? (
                  <Navigate replace to="/login" />
                ) : (
                  <Students />
                )
              }
            />
            <Route
              exact
              path="/secretaries"
              element={
                !props.isLoggedIn ? (
                  <Navigate replace to="/login" />
                ) : (
                  <Secretaries />
                )
              }
            />
            <Route
              exact
              path="/certificates"
              element={
                !props.isLoggedIn ? (
                  <Navigate replace to="/login" />
                ) : (
                  <Certificates />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.reducer.isLoggedIn,
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes);
