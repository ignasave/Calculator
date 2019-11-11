import React from 'react';
import { shallow } from 'enzyme';
import BeforeAccount from './index';
import { findByTestAttr, checkProps } from './../../Utils';

describe('BeforeAccount Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning with string', () => {
      const expectedProps = {
        account: '95 + 2 x 4',
        outcome: '10',
        clickHandler: () => {}
      };
      const propsError = checkProps(BeforeAccount, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        account: '95 + 2 x 4',
        outcome: '10',
        clickHandler: mockFunc
      };
      wrapper = shallow(<BeforeAccount {...props} />);
    });

    it('Should render without errors', () => {
      const beforeAccount = findByTestAttr(wrapper, 'BeforeAccountComponent');
      expect(beforeAccount.length).toBe(1);
    });

    it('Should render an account', () => {
        const account = findByTestAttr(wrapper, 'account')
        expect(account.length).toBe(1);
    })

    it('Should render an outcome', () => {
        const outcome = findByTestAttr(wrapper, 'outcome')
        expect(outcome.length).toBe(1);
    })

    it('Should emit callback on click event', () => {
        const beforeAccount = findByTestAttr(wrapper, 'BeforeAccountComponent');
        beforeAccount.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1)
    })
  });
});