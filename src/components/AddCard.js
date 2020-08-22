import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const AddCardWrapper = styled.div`
  min-width: 300px;
  height: 150px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8f9da4;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  &:hover{
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
  }
  > svg{
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
  > div{
    font-size: 20px;
  }
`

const AddCard = ()=>{
    return (
        <AddCardWrapper onClick={() => alert("该功能待完善")}>
            <Icon name="add" fill="#c9cdd0"/>
            <div>新建项目组</div>
        </AddCardWrapper>
    )
}

export default AddCard