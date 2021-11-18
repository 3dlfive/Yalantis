import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [yalantis, yalantisData] = useState("")
  const alpabet =[...String.fromCharCode(...Array(123).keys()).slice(97)];
  console.log(alpabet);
  const getYalantisData = () => {
    Axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((resoponse)=>{
      console.log(resoponse);
      yalantisData(resoponse.data.map(e=><div> {e.firstName} {e.lastName};</div>))
    })

  }
  return (<div> list:    <button onClick={getYalantisData}> get Data </button> {yalantis} {alpabet.map(e=><div>{e.toUpperCase()}</div>)} </div>);

}

export default App;
