import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import '../Register.css';

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  
  

  return (
    <div className="register-container">
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit} className="register-form">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="form-input"
            placeholder="tuemail@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form-input"
            placeholder="*************"
          />
        </div>

        <button className="form-button">Registrar</button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="btn btn-danger">
          Iniciar Sesión
        </Link>
      </p>
    </div>
  );
}