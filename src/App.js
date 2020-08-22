import React from 'react';
import Card from './components/Card';
import './reset.css';
import AddCard from './components/AddCard';
import Filter from './components/Filter';
import styled from 'styled-components';

import store from './store/store';

const AppWrapper = styled.div`
  margin: 100px;
  position: relative;
`;

const CardGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const Loading = styled.div`
  text-align: center;
  padding-top: 100px;
`

function App() {
    const { cardList } = store.getState()
    return (
        <AppWrapper className="App">
            <Filter/>
            {cardList.length > 0 ? (
                    <CardGroupWrapper>
                        {cardList.map((item, index) => (
                            <Card key={index} groupName={item.name} color={item.color} locked={item.locked} private={item.private} itemCount={item.itemCount}/>
                        ))}
                        <AddCard/>
                    </CardGroupWrapper>

                ) : (
                    <Loading>
                        加载中...
                    </Loading>
                )
            }
        </AppWrapper>
    );
}

export default App;
