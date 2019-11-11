import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const calculate = (n1, op, n2) => {
    if (n1 === 'e') n1 = 0;
    if (n2 === 'e') n2 = 0;
    switch (op) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case 'X':
        return n1 * n2;
      case '/':
        return n1 / n2;
      default:
        return n1 + n2;
    }
  };