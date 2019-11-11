import { stateTypes } from './stateTypes';
import { calculate } from '../Utils/index'

export const initialState = {
  totalNumber: 0,
  newNumber: 0,
  account: '',
  lastOperator: null,
  float: false
};

export const stateReducer = (state, action) => {
  switch (action.type) {
    case stateTypes.addNumberToNewNumber:
      if (state.newNumber === 'e') {
        return { ...state, newNumber: action.number, float: false };
      } else if (action.number === '.') {
        return {
          ...state,
          float: true
        };
      } else {
        return {
          ...state,
          float: false,
          newNumber: Number(
            String(state.newNumber) +
              (state.float ? '.' : '') +
              String(action.number)
          )
        };
      }
    case stateTypes.setLastOperator:
      if (state.newNumber === 'e') {
        return {
          ...state,
          lastOperator: action.operator
        };
      } else {
        let result = calculate(
          state.totalNumber,
          state.lastOperator,
          state.newNumber
        );

        let newAccount = `${state.account ? state.account : ''} ${
          state.lastOperator ? state.lastOperator : ''
        } ${state.newNumber === 'e' ? 0 : state.newNumber}`;

        return {
          ...state,
          totalNumber: result,
          newNumber: 'e',
          account: newAccount,
          lastOperator: action.operator
        };
      }
    case stateTypes.CE:
      return {
        ...state,
        float: false,
        newNumber: 0
      };
    case stateTypes.C:
      return {
        totalNumber: 0,
        newNumber: 0,
        account: '',
        lastOperator: null,
        float: false
      };
    case stateTypes.equal:
      let result = calculate(
        state.totalNumber,
        state.lastOperator,
        state.newNumber
      );

      let newAccount = `${state.account ? state.account : ''} ${
        state.lastOperator ? state.lastOperator : ''
      } ${state.newNumber === 'e' ? 0 : state.newNumber}`;

      let newHistory = action.history.concat({
        totalNumber: result,
        newNumber: 'e',
        account: newAccount
      });

      action.setHistory(newHistory);

      return {
        ...state,
        totalNumber: 0,
        newNumber: result,
        account: '',
        lastOperator: null
      };
    case stateTypes.oppositeNumber:
      return {
        ...state,
        newNumber: state.newNumber * -1
      };
    case stateTypes.del:
      let number = Number(String(state.newNumber).slice(0, -1));
      return {
        ...state,
        newNumber: number
      };
    case stateTypes.historySet:
      return {
        ...action.data
      };
    default:
      return { ...state };
  }
};
