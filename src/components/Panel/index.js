import React from 'react';
import PropTypes from 'prop-types';
import './panel.scss'

function Panel({ account, helper = 0 }) {
  return (
    <div className='panel' data-test='panelComponent'>
      {account && (
        <div className='account' data-test='account'>
          {account}
        </div>
      )}
      <div className='helper' data-test='helper'>
        {helper}
      </div>
    </div>
  );
}

Panel.propTypes = {
    account: PropTypes.string,
    helper: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Panel;
