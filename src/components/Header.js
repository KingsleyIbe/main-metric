import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <div className="page-title">
        <h5>Main metrics</h5>
      </div>
      <nav className="flex-items">
        <NavLink className="link-item" to="/lastHour">
          <p>Last hour</p>
        </NavLink>
        <NavLink className="link-item" to="/today">
          <p>Today</p>
        </NavLink>
        <NavLink className="link-item" to="/">
          <p>Yesterday</p>
        </NavLink>
        <NavLink className="link-item" to="/last3days">
          <p>Last 3 days</p>
        </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;
