import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profile/ProfileForm";

const AppRoutes = ({ login, signup }) => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route exact path="/jobs" element={<JobList />} />
      <Route exact path="/login" element={<LoginForm login={login} />} />
      <Route exact path="/signup" element={<SignupForm signup={signup} />} />
      <Route exact path="/profile" element={<ProfileForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
