import { NavLink, Outlet } from "react-router";
import './Nav.css'
export default function Navbar() {
  return (
    <div>
    <div className="header">
      <div>
        <NavLink className="link" to={"./"}><h1>Logo</h1></NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/college">
              College
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/user">
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}
