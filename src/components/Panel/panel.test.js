import React from 'react';
import { shallow } from 'enzyme';
import Panel from './index';
import { findByTestAttr, checkProps } from './../../Utils';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning with number', () => {
      const expectedProps = {
        account: '95 + 2 x 4',
        helper: 140
      };
      const propsError = checkProps(Panel, expectedProps);
      expect(propsError).toBeUndefined();
    });

    it('Should NOT throw a warning with string', () => {
        const expectedProps = {
          account: '95 + 2 x 4',
          helper: '140'
        };
        const propsError = checkProps(Panel, expectedProps);
        expect(propsError).toBeUndefined();
      });

  });

  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        account: '95 + 2 x 4',
        helper: 140
      };
      wrapper = shallow(<Panel {...props} />);
    });

    it('Should render without errors', () => {
      const panel = findByTestAttr(wrapper, 'panelComponent');
      expect(panel.length).toBe(1);
    });

    it('Should render a account', () => {
        const account = findByTestAttr(wrapper, 'account')
        expect(account.length).toBe(1);
    })

    it('Should render a helper', () => {
        const helper = findByTestAttr(wrapper, 'helper')
        expect(helper.length).toBe(1);
    })

  });
});
