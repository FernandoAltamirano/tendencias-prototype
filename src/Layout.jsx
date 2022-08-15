import logo from "./assets/logo.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import iconUser from "./assets/user.png";
import iconDoc from "./assets/doc.png";
import iconChart from "./assets/chart.png";
function Principal() {
  const location = useLocation();
  return (
    <div className='app'>
      <div className='sidebar'>
        <img src={logo} alt='logo' />
        <hr />
        <ul>
          <li>
            <Link to='/'>
              <img src={iconUser} />
              Expedientes
            </Link>
          </li>
          <li
            className={
              !location.pathname.includes("estadisticas") ? "active" : ""
            }
          >
            <Link to='/'>
              <img src={iconDoc} />
              Denuncias
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("estadisticas") ? "active" : ""
            }
          >
            <Link to='/estadisticas'>
              <img src={iconChart} />
              Estadísticas
            </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <div className='general-container'>
          <h1>Poder Judicial del Perú</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Principal;
