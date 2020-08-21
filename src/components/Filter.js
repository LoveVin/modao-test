import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  font-size: 18px;
  width: 140px;
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
  
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  margin: 10px 0;
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
    return (
        <FilterWrapper>
            <Title>
                <span>所有项目组</span>
                <Icon name="down" fill="#909ea5" />
            </Title>
            <Options>
                <li>所有项目组</li>
                <li>锁定</li>
                <li>私密</li>
            </Options>
        </FilterWrapper>
    )
}

export default Filter