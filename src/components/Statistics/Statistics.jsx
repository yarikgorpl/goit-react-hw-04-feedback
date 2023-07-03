import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ title, good, neutral, bad, sum, positivePercentage }) => {
  if (!good && !neutral && !bad) {
    return <p className={css.text}>"No feedback given"</p>;
  } else {
    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>Good:{good}</p>
        <p className={css.text}>Neutral:{neutral}</p>
        <p className={css.text}>Bad:{bad}</p>
        <p className={css.text}>Total:{sum}</p>
        <p className={css.text}>Positive feedback:{positivePercentage}%</p>
      </div>
    );
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  sum: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
