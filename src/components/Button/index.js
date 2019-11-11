import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({
  children,
  clickHandler,
  isPrimary = false
}) {
  return (
    <div
      onClick={clickHandler}
      data-test='buttonComponent'
      className={`button ${isPrimary ? 'primary' : 'secondary'}`}
    >
      {children && <div data-test='children'>{children}</div>}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  clickHandler: PropTypes.func,
  isPrimary: PropTypes.bool
};

export default Button;
