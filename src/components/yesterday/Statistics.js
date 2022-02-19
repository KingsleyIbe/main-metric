import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCartShopping, faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => (
  <div className="statistics-container">
    <div className="stats-flex">
      <div className="search-flex">
        <div className="search">
          <FontAwesomeIcon icon={faFilter} className="faIcons" />
          <h4>Searches</h4>
          <span>+5%</span>
        </div>
        <div className="yesterday">
          <p>29 380</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>27 985</p>
          <p>Last friday</p>
        </div>
      </div>
      <div className="traffic">
        <p>Mobile traffic: 100%</p>
        <p>Web traffic: 100%</p>
        <p>You get 100% traffic on mobile and desktop devices.</p>
        <div className="help">
          <p>Help:</p>
          <p className="p2">Searches, Pessimisation</p>
        </div>
      </div>
    </div>
    <div className="stats-flex">
      <div className="search-flex">
        <div className="clicks">
          <FontAwesomeIcon icon={faHandPointer} className="faIcons" />
          <h4>Clicks</h4>
          <span>-13%</span>
        </div>
        <div className="yesterday">
          <p>243</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>280</p>
          <p>Last friday</p>
        </div>
      </div>
      <div className="clicks-traffic">
        <h4>CTR: 0,04%</h4>
        <p>Conversion from searches  to clicks on all devices.</p>
        <div className="help">
          <p>Help:</p>
          <p className="p2">CTR, Cliks</p>
        </div>
      </div>
    </div>
    <div className="stats-flex">
      <div className="search-flex">
        <div className="search sales">
          <FontAwesomeIcon icon={faCartShopping} className="faIcons" />
          <h4>Sales</h4>
        </div>
        <div className="yesterday">
          <p>24</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>24</p>
          <p>Last friday</p>
        </div>
      </div>
      <div className="traffic sales-traffic">
        <p>STR: 6.2% Avg.</p>
        <p>Check: 8 903₽</p>
        <p>Conversion from clicks to bookings on all devices.</p>
        <div className="help">
          <p>Help:</p>
          <p className="p2">STR, Bookings, Avg. Check</p>
        </div>
      </div>
    </div>
  </div>
);

export default Statistics;
