import React from 'react';

function Entry(props) {
  return (<div>
    <span>{props.name}   {props.lastName} </span>
    <span>{props.id}   {props.date} </span>
    </div>
  )
}

export default Entry;
