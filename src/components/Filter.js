import React from 'react';
import Icon from './Icon';
import store from '../store/store';
import FilterWrapper from '../styles/Filter/FilterWrapper';
import Title from '../styles/Filter/Title';
import Options from '../styles/Filter/Options';

const Filter = ()=>{
    const { closed , currentFilter } = store.getState()
    return (
        <FilterWrapper>
            <Title onClick={() => store.dispatch({type: 'toggle'})}>
                <span>{currentFilter}</span>
                <Icon name="down" fill="#909ea5" />
            </Title>
            <Options closed={closed}>
                <li onClick={() => store.dispatch({type: 'showAll'})}>所有项目组</li>
                <li onClick={() => store.dispatch({type: 'showLocked'})}>锁定</li>
                <li onClick={() => store.dispatch({type: 'showPrivate'})}>私密</li>
            </Options>
        </FilterWrapper>
    )
}

export default Filter