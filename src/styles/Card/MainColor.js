import styled from 'styled-components';

const MainColor = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 25px;
`;

export default MainColor