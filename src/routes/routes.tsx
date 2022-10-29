import { Route, Navigate, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import { RegisterPage } from "../pages/registerPage/registerPage";

export const RoutesMap = () => {
  return (
    <Routes>
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
