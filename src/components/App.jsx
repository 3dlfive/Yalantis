import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [yalantis, yalantisData] = useState("")

  const getYalantisData = () => {
    Axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((resoponse)=>{
      console.log(resoponse);
      yalantisData(resoponse.data.map(e=><div> {e.firstName} {e.lastName};</div>))
    })
  }
  return (<div> Get request Yalantis <button onClick={getYalantisData}> get Data </button>{yalantis}   </div>);

}

export default App;
