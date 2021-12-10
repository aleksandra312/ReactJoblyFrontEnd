import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import ItemsList from "../common/ItemsList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profile/ProfileForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/companies" element={<ItemsList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route exact path="/jobs" element={<ItemsList />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/signup" element={<SignupForm />} />
      <Route exact path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
