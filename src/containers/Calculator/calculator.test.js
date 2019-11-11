import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './index';
import { findByTestAttr } from './../../Utils';

describe('Calculator Component', () => {
  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Calculator />);
    });

    it('Should render without errors', () => {
      const calculator = findByTestAttr(
        wrapper,
        'calculatorComponent'
      );
      expect(calculator.length).toBe(1);
    });
  });
});
