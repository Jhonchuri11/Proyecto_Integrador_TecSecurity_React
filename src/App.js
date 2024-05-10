import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="text-black h-screen flex text-white bg-gradient-to-r from-blue-200 via-purple-500 to-black">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/"      element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
