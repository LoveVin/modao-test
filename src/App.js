import React from 'react';
import Card from './components/Card'
import './reset.css'
import AddCard from './components/AddCard';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
        <Filter/>
        <Card color="#80d294" groupName="墨刀实验室" locked={false} private={false} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={false} private={true} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={true} private={false} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={true} private={true} itemCount={5}/>
        <AddCard/>
    </div>
  );
}

function ajax(url){
    setTimeout(()=>{
        return {

        }
    },3000)
}

export default App;
