import styled from 'styled-components';

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

export default GroupInfo