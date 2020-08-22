import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

render()

store.subscribe(render)

ajax('/list').then(list => {
    store.dispatch({type: 'initState', initialState: list})
})

function ajax() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([
                { name: '墨刀实验室', color: "#80d294", locked: false, private: false, itemCount: 3},
                { name: '墨刀魔法棒团队', color: "#f7c273", locked: false, private: false, itemCount: 0},
                { name: '超级工作组', color: "#f2908d", locked: false, private: true, itemCount: 4},
                { name: '冷笑客服组', color: "#e38073", locked: false, private: false, itemCount: 4},
                { name: '设计部门', color: "#f8c767", locked: false, private: false, itemCount: 4},
                { name: 'Third Reactor', color: "#8dcaeb", locked: true, private: true, itemCount: 1}
            ])
        }, 1000);
    })
}