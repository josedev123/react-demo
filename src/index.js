import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountCharacters extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      message: "",
      anotherMessage: "Another Message"
    };
  }

  onMessageChange(text) {
    this.setState({

      message: 'Message has '+text.length+' characters'

    });
  }

  render() {
    return <div>
          <h2>Count Characters component</h2>
          <p>
            <label>Enter Message: 

              <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input>

            </label>
          </p>
          <p>
            <label>{this.state.message}</label>
          </p>
          <p>
            <label>{this.state.anotherMessage}</label>
          </p>

    </div>
  }
}
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
const element = <CountCharacters></CountCharacters>

ReactDOM.render(element,document.getElementById("root"));