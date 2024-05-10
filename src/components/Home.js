import { useAuth } from "../context/AuthContext";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../Home.css';

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar-light fixed-top">
        <div>
          
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="">
              Home{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Menu
            </a>
          </li> 
          <li className="nav-item ">
            <a className="nav-link" href="">
              About 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Book Table
            </a>
          </li>
        </ul>
      </div>
      <div className="Logout ">
            <button className="btn btn-secondary" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
      </Navbar>
      <div className="cuerpo">
        <p> </p>
      </div>
    </div>
  );
}
