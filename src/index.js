import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const EmployeeContext = React.createContext({
  data: '',
  changeEmployeeInfo:()=>{}
});

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state={
      data: {
        Id:101,
        Name:'Pragim Tech',
        Location: 'Bangalore',
        Salary: 15000
    },
    changeEmployeeInfo: this.updateEmployeeDetails
  }
  }

  updateEmployeeDetails=()=>{
    this.setState({
      data: {
        Id: 102
      }
    })
  }

  render() {
    return <div>
      <h2>Welcome to App Component</h2> 
      <p>
          <label>Employee Id: {this.state.data.Id}</label>
      </p>
      <EmployeeContext.Provider value={this.state}>
        
        <Employee></Employee>

      </EmployeeContext.Provider> 
        </div>
  }
}

class Employee extends React.Component { 
  static contextType = EmployeeContext;
  render() {
    return <div>
      <h2>Welcome to Employee Component...</h2>  
  <p>Employee Id: {this.context.data.Id}</p>
  <button onClick={this.context.changeEmployeeInfo}>Change</button>
      </div>
  }
}


let element = <App></App>

ReactDOM.render(element,document.getElementById("root"));