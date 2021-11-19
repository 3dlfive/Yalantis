import React, {
  useState
} from 'react';
import Axios from 'axios';
import Entry from "./Entry"

function cEntry(ydata) {
  return ( <
    Entry name = {
      ydata.firstName
    }
    lastName = {
      ydata.lastName
    }
    id = {
      ydata.id
    }
    date = {
      ydata.dob
    }
    />
  );
}

function App() {

  const [yalantis, yalantisData] = React.useState("")


  const alpabet = [...String.fromCharCode(...Array(123).keys()).slice(97)];


  React.useEffect(() => {
    Axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((resoponse) => {
      //console.log(resoponse.data);
      // yalantisData(resoponse.data.map(e => < div > {
      //     e.firstName
      //   } {
      //     e.lastName
      //   }; < /div>))
      yalantisData(resoponse.data)
    })

  })
  console.log(yalantis);
  return ( < div > list: {
        yalantis.map(cEntry)
      } {
        alpabet.map(e => < div > {
          e.toUpperCase()
        } < /div>)} </div > );

      }

      export default App;
