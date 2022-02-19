import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '../ProgressBar';

const Errors = () => (
  <div className="error-container">
    <div className="errors">
      <div className="error-item">

        <h4>
          {' '}
          <FontAwesomeIcon icon={faCircle} className="faCircle" />
          {' '}
          Errors: 0.98%
        </h4>
        <p>Average: 0.90%</p>
      </div>
      <div className="error-item">
        <h4>
          {' '}
          <FontAwesomeIcon icon={faCircle} className="faCircle" />
          {' '}
          Zeroes: 9.12%
        </h4>
        <p>Average: 3.11%</p>
      </div>
      <div className="error-item">
        <h4>
          {' '}
          <FontAwesomeIcon icon={faCircle} className="faCircle" />
          Timeouts: 5.12%
        </h4>
        <p>Average: 5.11%</p>
      </div>
    </div>
    <div className="progress-container">
      <ProgressBar bgcolor="#ffcc00" progress />
      <ProgressBar bgcolor="#5856d5" progress />
      <ProgressBar bgcolor="#2196f3" progress />
      <ProgressBar bgcolor="#a0b0b9" progress />
    </div>
    <div className="error-number">
      <div>
        <p>
          {' '}
          <FontAwesomeIcon icon={faSquare} className="faSquare fs1" />
          {' '}
          Error 502: 1 356
        </p>
      </div>
      <div>
        <p>
          {' '}
          <FontAwesomeIcon icon={faSquare} className="faSquare fs2" />
          {' '}
          Error 501: 800
        </p>
      </div>
      <div>
        <p>
          {' '}
          <FontAwesomeIcon icon={faSquare} className="faSquare fs3" />
          {' '}
          Error 505: 450
        </p>
      </div>
      <div>
        <p>
          {' '}
          <FontAwesomeIcon icon={faSquare} className="faSquare fs4" />
          {' '}
          Other: 333
        </p>
      </div>
    </div>
  </div>
);

export default Errors;
