import React, { useContext } from 'react';
import { useStateValue } from '../../Store';
import { HistoryContext } from '../../Store';
import Keyboard from '../../components/Keyboard';
import { stateTypes } from '../../reducers/stateTypes';

function KeyboardContainer() {
  const [state, dispatch] = useStateValue();
  const [history, setHistory] = useContext(HistoryContext);

  const items = [
    {
      clickHandler: () => dispatch({ type: stateTypes.CE }),
      content: 'CE'
    },
    {
      clickHandler: () => dispatch({ type: stateTypes.C }),
      content: 'C'
    },
    {
      clickHandler: () => dispatch({ type: stateTypes.del }),
      content: 'DEL'
    },
    {
      clickHandler: () =>
        dispatch({ type: stateTypes.setLastOperator, operator: '/' }),
      content: '/'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 7
        }),
      content: '7'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 8
        }),
      content: '8'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 9
        }),
      content: '9'
    },
    {
      clickHandler: () =>
        dispatch({ type: stateTypes.setLastOperator, operator: 'X' }),
      content: 'X'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 4
        }),
      content: '4'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 5
        }),
      content: '5'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 6
        }),
      content: '6'
    },
    {
      clickHandler: () =>
        dispatch({ type: stateTypes.setLastOperator, operator: '-' }),
      content: '-'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 1
        }),
      content: '1'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 2
        }),
      content: '2'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 3
        }),
      content: '3'
    },
    {
      clickHandler: () =>
        dispatch({ type: stateTypes.setLastOperator, operator: '+' }),
      content: '+'
    },
    {
      clickHandler: () =>
        dispatch({ type: stateTypes.oppositeNumber }),
      content: '+/-'
    },
    {
      isPrimary: true,
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: 0
        }),
      content: '0'
    },
    {
      clickHandler: () =>
        dispatch({
          type: stateTypes.addNumberToNewNumber,
          number: '.'
        }),
      content: '.'
    },
    {
      clickHandler: () =>
        dispatch({
          type: stateTypes.equal,
          setHistory: setHistory,
          history: history
        }),
      content: '='
    }
  ];

  return <Keyboard items={items} />;
}

KeyboardContainer.propTypes = {};

export default KeyboardContainer;
