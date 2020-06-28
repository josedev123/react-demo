import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends React.Component{
  render(){
    return <div className="employeeDetails">
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

      <Department DeptName={this.props.DeptName} HeadName={this.props.DeptName}></Department>
    </div>
  }
}

class Department extends React.Component{
  render() {
    return <div className="deptInfo">
      <h2>Department Details</h2>

      <p>
          <label>Dept Name : <b>{this.props.DeptName}</b></label>
        </p>

        <p>
          <label>Head Name : <b>{this.props.HeadName}</b></label>
        </p>
    </div>

  }

}

const element =<Employee Id="2" Name="Employee Name" Location="Atlanta, GA" DeptName="dev" HeadName="Dept. Name"></Employee>

ReactDOM.render(element, document.getElementById("root"));