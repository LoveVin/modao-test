import styled from 'styled-components';

const CardWrapper = styled.div`
    min-width: 300px;
    height: 150px;
    cursor: pointer;
    display: flex;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    background-color: white;
    &:hover{
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
    }
    border: ${props => props.locked ? '2px solid #c8cccf' : '2px solid transparent'};
`;

export default CardWrapper