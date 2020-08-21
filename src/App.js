import React from 'react';
import Card from './components/Card'
import './reset.css'

import x from './icons/lock.svg'

console.log(x)

function App() {

  return (
    <div className="App">
      <Card color="#80d294" groupName="墨刀实验室" itemCount={5}/>
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
