import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends React.Component{
  render(){
    return <div>
        <h2>Employee Details</h2>
        <p>
          <label>Employee ID : <b>{this.props.Id}</b></label>
        </p>
        <p>
          <label>Employee Name : <b>{this.props.Name}</b></label>
        </p>
        <p>
          <label>Employee Location : <b>{this.props.Location}</b></label>
        </p>

    </div>
  }
}

const element =<Employee Id="2" Name="Employee Name" Location="Atlanta, GA" ></Employee>

ReactDOM.render(element, document.getElementById("root"));