import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCartShopping, faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => (
  <div className="statistics-container">
    <div className="stats-flex">
      <div className="search-flex">
        <div className="search">
          <FontAwesomeIcon icon={faFilter} className="faIcons" />
          <h4>Searches</h4>
          <span>+4%</span>
        </div>
        <div className="yesterday">
          <p>44 480</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>20 785</p>
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
          <span>-60%</span>
        </div>
        <div className="yesterday">
          <p>880</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>380</p>
          <p>Last friday</p>
        </div>
      </div>
      <div className="clicks-traffic">
        <h4>CTR: 2,04%</h4>
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
          <h4>Sales lastThreeDays</h4>
        </div>
        <div className="yesterday">
          <p>34</p>
          <p>Yesterday</p>
        </div>
        <div className="last-friday">
          <p>34</p>
          <p>Last friday</p>
        </div>
      </div>
      <div className="traffic sales-traffic">
        <p>STR: 7.2% Avg.</p>
        <p>Check: 8 803₽</p>
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
