import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import '../Login.css'

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribe un correo para restablecer la contraseña");
    try {
      await resetPassword(user.email);
      setError("Te enviamos un correo. Revisa tu bandeja de entrada");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" m-auto">
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="form-input"
            placeholder="tucorreo@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="form-input"
            placeholder="*************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="form-button">Iniciar Sesión</button>
          <a href="#!" onClick={handleResetPassword} className="forgot-password-link">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
      <button onClick={handleGoogleSignin} className="google-login-button">
        Iniciar sesión con Google
      </button>
      <p className="registration-link">
        ¿No tienes una cuenta? 
        <Link to="/register" className="register-link btn btn-danger">Registrarse</Link>
      </p>
    </div>
  );
}
