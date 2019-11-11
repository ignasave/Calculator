import React from 'react';
import PropTypes from 'prop-types';
import './beforeAccount.scss';
function BeforeAccount({ account, outcome, clickHandler }) {
  return (
    <div
      className='before-account'
      data-test='BeforeAccountComponent'
      onClick={clickHandler}
    >
      <div className='account' data-test='account'>
        {account}
      </div>
      <div className='outcome' data-test='outcome'>
        {outcome}
      </div>
    </div>
  );
}

BeforeAccount.propTypes = {
    account: PropTypes.string,
    outcome: PropTypes.string,
    clickHandler: PropTypes.func
};

export default BeforeAccount;
