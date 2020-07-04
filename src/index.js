import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

const EmployeeComponent=()=>{
  const formik=useFormik({
    initialValues: {
      Id: '',
      Name: '',
      Location: '',
      Salary:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  });
  return (
    <div>
    <h2>New EmployeeForm</h2>
    <form onSubmit={formik.handleSubmit}>
        <p>
          <label htmlFor="Id">Employee ID:</label>
          <input type="text" name="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
        </p>
        <p>
      <label htmlFor="Name">Employee Name </label>
      <input
        id="Name"
        name="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Name}
      />
      </p>
      <p>
      <label htmlFor="Location">Employee Location </label>
      <input
        id="Location"
        name="Location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Location}
      />
      </p>
      <p>
      <label htmlFor="Salary">Employee Salary </label>
      <input
        id="Salary"
        name="Salary"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Salary}
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element, document.getElementById("root"));