import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

import store from '../store/store';

const FilterWrapper = styled.div`
  display: inline-block;
  font-size: 18px;
  margin-bottom: 20px;
  position: absolute;
  left: 0;
  top: -50px;
`

const Title = styled.div`
  cursor: pointer;
  display: inline;
  > svg{
    width: 1em;
    height: 1em;
    margin-left: 5px;
  }
`

const Options = styled.ul`
  display: ${(props) => props.closed ? 'none': 'block'};
  width: 140px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  margin: 10px 0 0;
  padding: 10px;
  > li{
    padding: 5px;
    &:hover{
      color: #469ae3;
      background-color: #f6f7f8;
      cursor: pointer;
    }
  }
`

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