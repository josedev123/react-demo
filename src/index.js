import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const employeeContext = React.createContext();

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state={
        Id:101,
        Name:'Pragim Tech',
        Location: 'Bangalore',
        Salary: 15000
    };
  }
  changeEmployeeData=()=>{
    this.setState({Id:this.state.Id + 1});
  }
  render() {
    return <div>
      <h2>Welcome to App Component</h2> 
      <p>
  <label>Employee Id: {this.state.Id}</label>
      </p>
      <employeeContext.Provider value={this.state}>
        
      <Employee></Employee>

      </employeeContext.Provider> 
      <p>
        <button onClick={this.changeEmployeeData}>Update</button>
      </p>
        </div>
  }
}

class Employee extends React.Component { 
  static contextType = employeeContext; 
  render() {
    return <div>
      <h2>Welcome to Employee Component...</h2>  
      <p>
  <label>Employee Id: {this.context.Id}</label>
      </p>
      <Salary></Salary>    
      </div>
  }
}

class Salary extends React.Component {
  static contextType = employeeContext; 

  render() {
    return <div>
      <h2>Welcome to Salary Component...</h2> 
            <p>
  <label>Employee Id: {this.context.Id}</label>
      </p>    
      </div>
  }
}

let element = <App></App>

ReactDOM.render(element,document.getElementById("root"));