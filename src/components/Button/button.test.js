import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';
import { findByTestAttr, checkProps } from './../../Utils';

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning with string', () => {
      const expectedProps = {
        children: '9',
        isPrimary: true,
        clickHandler: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });

    it('Should NOT throw a warning with element', () => {
      const expectedProps = {
        children: <i>X</i>,
        isPrimary: false,
        clickHandler: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        children: <i>icon</i>,
        clickHandler: mockFunc,
        isPrimary: true
      };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render without errors', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should render a children', () => {
        const children = findByTestAttr(wrapper, 'children')
        expect(children.length).toBe(1);
    })

    it('Should emit callback on click event', () => {
        const button = findByTestAttr(wrapper, 'buttonComponent');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1)
    })
  });
});
