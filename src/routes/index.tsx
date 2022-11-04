import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 
  Badge, 
  ForgetPassword,
  Profile,
  ResetPassword,
  ScreenVideo,
  Login 
} from "../pages";

import React from 'react'
import { RequireAuth } from "../contexts/Auth/RequireAuth";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route  path="/apresentacao" element={<RequireAuth><ScreenVideo /></RequireAuth>} />
          <Route  path="/perfil" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route  path="/cracha" element={<RequireAuth><Badge /></RequireAuth>} />
          <Route  path="/esqueceu-sua-senha" element={<ForgetPassword />} />
          <Route  path="/resetar-senha" element={<ResetPassword />} />
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp

