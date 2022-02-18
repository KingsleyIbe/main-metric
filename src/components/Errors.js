import ProgressBar from './ProgressBar';

const Errors = () => (
  <div className="error-container">
    <div className="errors">
      <div className="error-item">
        <h4>Errors: 0.12%</h4>
        <p>Average: 0.11%</p>
      </div>
      <div className="error-item">
        <h4>Zeroes: 5.12%</h4>
        <p>Average: 0.11%</p>
      </div>
      <div className="error-item">
        <h4>Timeouts: 0.12%</h4>
        <p>Average: 0.11%</p>
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
        <p>Error 500: 1 256</p>
      </div>
      <div>
        <p>Error 501: 800</p>
      </div>
      <div>
        <p>Error 502: 650</p>
      </div>
      <div>
        <p>Other: 330</p>
      </div>
    </div>
  </div>
);

export default Errors;
