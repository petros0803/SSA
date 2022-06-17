import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import TopMenu from "../Components/Common/TopMenu/TopMenu";
import Certificates from "../Components/Pages/Certificates/Certificates";
import Secretaries from "../Components/Pages/Secretaries/Secretaries";
import Students from "../Components/Pages/Students/Students";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <div className="page--container">
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/secretaries" element={<Secretaries />} />
            <Route exact path="/certificates" element={<Certificates />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
