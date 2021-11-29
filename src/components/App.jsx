import React, { useState } from 'react';
import Axios from 'axios';
import Checkbox from "./Checkbox"
function App() {

  const [yalantis, yalantisData] = React.useState([])


  const alpabet =[...String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase()];

React.useEffect(() => {
    Axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((resoponse)=>{
      yalantisData(resoponse.data)
    })

  })
  const filterYantis = yalantis.sort(function (a, b) {
  if (a.lastName > b.lastName) {
    return 1;
  }
  if (a.lastName < b.lastName) {
    return -1;
  }
  //  должно быть равным b
  return 0;
});

  return (<div> <b>Employers:</b> 
  {alpabet.map(e=> {
    const filtD = filterYantis.filter(el=>el.lastName[0]===e)

    return (
        <>
    <h2>{e}</h2>
    {filtD.map(e=><p>{e.lastName} {e.firstName} <Checkbox /></p>)}
    </>
  )}
)}
  </div>);

}

export default App;
