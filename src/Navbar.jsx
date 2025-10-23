import { Link, Outlet } from "react-router";
import './Nav.css'
export default function Navbar() {
  return (
    <div>
    <div className="header">
      <div>
        <Link className="link" to={"./"}><h1>Logo</h1></Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/college">
              College
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}
