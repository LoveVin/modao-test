import React from 'react';
import Card from './components/Card';
import './reset.css';
import AddCard from './components/AddCard';
import Filter from './components/Filter';
import store from './store/store';
import AppWrapper from './styles/App/AppWrapper';
import CardGroupWrapper from './styles/App/CardGroupWrapper';
import Loading from './styles/App/Loading';

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
