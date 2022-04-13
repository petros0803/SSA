import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Auth/Login";
import TopMenu from "../Components/Common/TopMenu/TopMenu";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
