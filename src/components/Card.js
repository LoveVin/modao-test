import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'

const CardWrapper = styled.div`
    height: 160px;
    cursor: pointer;
    display: flex;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    background-color: white;
    &:hover{
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
    }
    border: ${props => props.locked ? '2px solid #c8cccf' : '2px solid transparent'};
`;

const MainColor = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 25px;
`;

const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #8f9da4;
  > div{
    margin-bottom: 15px;
    display: flex;
    &.title{
      font-size: 20px;
      color: #333;
    }
    > button{
      padding: 3px 5px;
      margin-right: 15px;
      border: 1px solid #dedee3;
      background-color: transparent;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.lock{
        display: ${props => props.locked ? 'flex' : 'none'};
      }
      &.limit{
        visibility: ${props => props.private ? 'visible' : 'hidden'};
      }
      > svg{
        width: 1.2em;
        height: 1.2em;
        margin-right: 5px;
      }
    }
    > span{
      font-size: 20px;
      color: #7e8693;
      margin-right: 5px;
    }
  }
`

const Card = (props) => {
    return (
        <CardWrapper locked={props.locked}>
            <MainColor color={props.color}/>
            <GroupInfo locked={props.locked} private={props.private}>
                <div className="title">{props.groupName}</div>
                <div>
                    <button className="lock">
                        <Icon name="lock" fill="#8f9da4"/>
                        <span>锁定</span>
                    </button>
                    <button className="limit">
                        <Icon name="view-off" fill="#8f9da4"/>
                        <span>私密</span>
                    </button>
                </div>
                <div>
                    <span>{props.itemCount}</span>
                    项目
                </div>
            </GroupInfo>
        </CardWrapper>
    );
};

export default Card;
