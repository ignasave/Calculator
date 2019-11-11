import React, { useContext, useState, useEffect } from 'react';
import { StateContext } from '../../Store';
import KeyboardContainer from '../../containers/KeyboardContainer';
import Panel from '../../components/Panel';
import './calculator.scss'
function Calculator() {
  const [state] = useContext(StateContext);
  const [helper, setHelper] = useState(0);

  useEffect(() => {
    if (state.newNumber !== 'e') {
      setHelper(state.newNumber);
    } else {
      setHelper(state.totalNumber);
    }
  }, [state]);
  
  return (
    <div data-test='calculatorComponent' className='calculator'>
      <Panel
        account={`${state.account ? state.account : ''} ${
          state.lastOperator ? state.lastOperator : ''
        }`}
        helper={helper}
      />
      <KeyboardContainer />
    </div>
  );
}

export default Calculator;
