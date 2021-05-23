import "./Navbar.css";
import landkit from "../../resources/images/Landkit.svg";

export function Navbar(props) {
  return (
    <div className="navbar-wrapper">
      <ul>
        <li>
          <a href="/">
            <img src={landkit} className="landkit-logo" alt="logo" />
          </a>
        </li>
        <li className="drop-down-menu">
          <div className="list-item">Landing Pages</div>
          <div className="list-item">Account</div>
          <div className="list-item">Documentation</div>
        </li>
        <li className="buy-now">
          <button className="buy-now-button">Buy Now</button>
        </li>
      </ul>
    </div>
  );
}
