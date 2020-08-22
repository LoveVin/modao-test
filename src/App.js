import React from 'react';
import Card from './components/Card';
import './reset.css';
import AddCard from './components/AddCard';
import Filter from './components/Filter';
import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 50px;
  border: 1px solid red;
`;

const CardGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;
`;

const Space = styled.div`
  min-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

function App() {

    return (
        <AppWrapper className="App">
            <Filter/>
            <CardGroupWrapper>
                <Space>
                    <Card color="#80d294" groupName="墨刀实验室" locked={false} private={false} itemCount={5}/>
                </Space>
                <Space>
                    <Card color="#80d294" groupName="墨刀实验室" locked={false} private={true} itemCount={5}/>
                </Space>
                <Space>
                    <Card color="#80d294" groupName="墨刀实验室" locked={true} private={false} itemCount={5}/>
                </Space>
                <Space>
                    <Card color="#80d294" groupName="墨刀实验室" locked={true} private={true} itemCount={5}/>
                </Space>
                <Space>
                    <AddCard/>
                </Space>
            </CardGroupWrapper>
        </AppWrapper>
    );
}

function ajax(url) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([
                { name: '墨刀实验室', color: "#80d294", locked: false, private: false, itemCount: 3},
                { name: '墨刀魔法棒团队', color: "#f7c273", locked: false, private: false, itemCount: 3},
                { name: '超级工作组', color: "#f2908d", locked: false, private: true, itemCount: 3},
                { name: '冷笑客服组', color: "#e38073", locked: false, private: false, itemCount: 3},
                { name: '设计部门', color: "#f8c767", locked: false, private: false, itemCount: 3},
                { name: 'Third Reactor', color: "#8dcaeb", locked: true, private: true, itemCount: 3}
            ])
        }, 2000);
    })
}

export default App;
