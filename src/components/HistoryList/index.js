import React from 'react';
import PropTypes from 'prop-types';
import BeforeAccount from '../BeforeAccount';

function HistoryList({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <BeforeAccount
            account={item.account}
            outcome={item.outcome}
            clickHandler={item.clickHandler}
            key={`beforeAccount-${index}`}
          />
        );
      })}
    </div>
  );
}

HistoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default HistoryList;
