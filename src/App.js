import React from 'react';
import Card from './components/Card';
import './reset.css';
import AddCard from './components/AddCard';
import Filter from './components/Filter';
import styled from 'styled-components';

import store from './store/store';
import Icon from './components/Icon';

const AppWrapper = styled.div`
  margin: 100px;
  border: 1px solid red;
  position: relative;
`;

const CardGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;
  margin-right: -20px;
`;

const Loading = styled.div`
  text-align: center;
  padding-top: 100px;
`

const Space = styled.div`
  min-width: 310px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

function App() {
    const { cardList } = store.getState()
    return (
        <AppWrapper className="App">
            <Filter/>
            {cardList.length > 0 ? (
                    <CardGroupWrapper>
                        {cardList.map((item, index) => (
                            <Space key={index}>
                                <Card groupName={item.name} color={item.color} locked={item.locked} private={item.private} itemCount={item.itemCount}/>
                            </Space>
                        ))}
                        <Space>
                            <AddCard/>
                        </Space>
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
