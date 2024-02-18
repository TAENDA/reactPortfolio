import React from 'react';
import LineIcon from 'react-lineicons';


export default function Smalltitle(props){
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={props.icon}/>
      </span>
      <h4>{props.title}</h4>
    </div>
  )
}

