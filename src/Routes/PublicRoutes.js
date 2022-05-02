import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import TopMenu from "../Components/Common/TopMenu/TopMenu";
import Students from "../Components/Pages/Students/Students";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
