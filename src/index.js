import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function DisplayEmployeeInfo(employee) {}

var DisplayEmployeeInfo=(employee)=>{

  return <div>
    <h1>Employee Details ...</h1>
    <p>
    <label> Employee ID : <b>{employee.Id}</b></label>
    </p>
    <p>
    <label> Employee Name : <b>{employee.Name}</b></label>
    </p>
    <p>
    <label> Employee Location : <b>{employee.Location}</b></label>
    </p>
  
  </div>;
  
  };
  
  
  const element=<DisplayEmployeeInfo Id="101" Name="test name" Location="Atlanta, GA" ></DisplayEmployeeInfo>
  

ReactDOM.render(element, document.getElementById("root"));

