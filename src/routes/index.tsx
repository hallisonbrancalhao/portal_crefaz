import { Fragment } from "react";
import { Route, Routes as Router } from "react-router-dom";
import { 
  Badge, 
  ForgetPassword,
  Profile,
  ResetPassword,
  ScreenVideo,
  Login 
} from "../pages";

import { RequireAuth } from "../contexts/Auth/RequireAuth";

const RoutesApp = () => {
  return (
      <Fragment>
        <Router>
          <Route  path="/apresentacao" element={<RequireAuth><ScreenVideo /></RequireAuth>} />
          <Route  path="/perfil" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route  path="/cracha" element={<RequireAuth><Badge /></RequireAuth>} />
          <Route  path="/esqueceu-sua-senha" element={<ForgetPassword />} />
          <Route  path="/resetar-senha" element={<ResetPassword />} />
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Router>
      </Fragment>
  );
}

export default RoutesApp

