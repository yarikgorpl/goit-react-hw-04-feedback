import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ onButtonClick, option }) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {option.map(item => (
          <li className={css.item} key={item}>
            <button
              type="button"
              className={css.button}
              onClick={() => onButtonClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func,
  option: PropTypes.array,
};

export default FeedbackOptions;
