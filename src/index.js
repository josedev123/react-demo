import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends React.Component{
  state={
    counter:0
  };
  addEmployee=()=>{
    this.setState({counter:this.state.counter+1});
  }
  render(){
    return <div>
      <h2> Welcome</h2>

<p>
  <button onClick={this.addEmployee}>Add Employee</button>
</p>
  <p>Add Employee button clicked {this.state.counter} times</p>
    </div>
     }
}
const element = <Employee></Employee>

ReactDOM.render(element,document.getElementById("root"));