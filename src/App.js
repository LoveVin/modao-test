import React from 'react';
import Card from './components/Card'
import './reset.css'

function App() {
  return (
    <div className="App">
        <Card color="#80d294" groupName="墨刀实验室" locked={false} private={false} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={false} private={true} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={true} private={false} itemCount={5}/>
        <Card color="#80d294" groupName="墨刀实验室" locked={true} private={true} itemCount={5}/>
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
