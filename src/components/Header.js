import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <div>
        <hi>Main metrics</hi>
      </div>
      <nav>
        <NavLink to="/lastHour">
          <p>Last hour</p>
        </NavLink>
        <NavLink to="/today">
          <p>Today</p>
        </NavLink>
        <NavLink to="/yesterday">
          <p>Yesterday</p>
        </NavLink>
        <NavLink to="/last3days">
          <p>Last 3 days</p>
        </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;
