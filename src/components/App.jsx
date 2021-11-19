import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [yalantis, yalantisData] = React.useState("")


  const alpabet =[...String.fromCharCode(...Array(123).keys()).slice(97)];


React.useEffect(() => {
    Axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((resoponse)=>{
      yalantisData(resoponse.data.map(e=><div> {e.firstName} {e.lastName};</div>))
    })

  })
  return (<div> list:    {yalantis} {alpabet.map(e=><div>{e.toUpperCase()}</div>)} </div>);

}

export default App;
