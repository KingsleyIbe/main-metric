import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { bgcolor, progress } = props;

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 10,
  };

  return (
    <div className="progress-container" style={Childdiv}>
      <span>{progress}</span>
    </div>
  );
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default ProgressBar;
