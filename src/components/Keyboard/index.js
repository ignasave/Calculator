import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './keyboard.scss';

function Keyboard({ items }) {
  return (
    <div className='container'>
      {items.map((item, index) => {
        return (
          <div
            className='button-container'
            key={`buttonKey-${index}`}
          >
            <Button
              isPrimary={item.isPrimary}
              clickHandler={item.clickHandler}
            >
              {item.content}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

Keyboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default Keyboard;
