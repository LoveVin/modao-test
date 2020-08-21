import React from 'react';

import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    padding: 25px;
    padding-bottom: 13px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    background-color: white;
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
    margin-bottom: 12px;
    &.title{
      font-size: 20px;
      color: #333;
    }
    > button{
      margin-right: 15px;
      border: 1px solid #dedee3;
      background-color: transparent;
      border-radius: 5px;
    }
    > span{
      font-size: 20px;
      color: #7e8693;
    }
  }
`

const Card = (props) => {
    return (
        <CardWrapper>
            <MainColor color={props.color}/>
            <GroupInfo>
                <div className="title">{props.groupName}</div>
                <div>
                    <button>锁定</button>
                    <button>私密</button>
                </div>
                <div><span>{props.itemCount}</span> 项目</div>
            </GroupInfo>
        </CardWrapper>
    );
};

export default Card;
