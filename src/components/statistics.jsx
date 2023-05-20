import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, countTotalFeedback }) => {
    return <div>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {countTotalFeedback}%</p>
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}