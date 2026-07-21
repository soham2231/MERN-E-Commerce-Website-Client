import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/customer/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import AdminDashboard from "../pages/admin/AdminDashboard";
import VendorDashboard from "../pages/vendor/VendorDashboard";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["Admin"]} />
          </ProtectedRoute>
        }
      >
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["Vendor"]} />
          </ProtectedRoute>
        }
      >
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
