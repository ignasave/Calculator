import React, { useContext } from 'react'
import HistoryList from '../../components/HistoryList'
import { HistoryContext } from '../../Store';
import { stateTypes } from '../../reducers/stateTypes';
import { useStateValue } from '../../Store';
import './history.scss'
function History() {
    const [history] = useContext(HistoryContext);
    const [state, dispatch] = useStateValue();

    let itemList = history.map((item) => {
        return {
            account : item.account,
            outcome: String(item.totalNumber),
            clickHandler : () => {
                dispatch({type: stateTypes.historySet, data: {
                    totalNumber: item.totalNumber,
                    newNumber: item.newNumber,
                    account: item.account,
                    lastOperator: null,
                    float: false
                }})
            }
        }
    })
    return (
        <div className='history'>
            <HistoryList items={itemList}/>
        </div>
    )
}


History.propTypes = {

}

export default History

