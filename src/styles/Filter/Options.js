import styled from 'styled-components';

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

export default Options