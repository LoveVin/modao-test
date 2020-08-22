import { createStore } from 'redux';

let defaultState = {closed: true, currentFilter: '所有项目组', cardList: []}
const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case 'initState':
            defaultState = {...state, cardList: action.initialState}
            return defaultState
        case 'showAll':
            return defaultState
        case 'showLocked':
            return {closed: true, currentFilter: '锁定', cardList: defaultState.cardList.filter(card => card.locked === true)}
        case 'showPrivate':
            return {closed: true, currentFilter: '私密', cardList: defaultState.cardList.filter(card => card.private === true)}
        case 'toggle':
            return {...state, closed: !state.closed}
        default: return state
    }
}

const store = createStore(reducer)

export default store