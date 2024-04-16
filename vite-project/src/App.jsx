import { useState } from "react";

const App = () => {

  let [FormObj, SetFormObj] = useState({fName: "", lName: "", city: "", gender: ""})

  const inputOnChange = (property, value) => {
    SetFormObj( prevObj => ({
      ...prevObj,
      [property]: value
    }))
  }

  const formSubmit = (e) => {
    e.preventDefault()
    console.log(FormObj);
  }

  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <input onChange={(e) => {inputOnChange("fName", e.target.value)}} value={FormObj.fName} placeholder="First Name" />

        <input onChange={(e) => {inputOnChange("lName", e.target.value)}} value={FormObj.lName} placeholder="Last Name" />

        <select onChange={(e) => {inputOnChange("city", e.target.value)}} value={FormObj.city}>
          <option value="">Choose City</option>
          <option value="Rabajry">Rabajry</option>
          <optiosn value="Dhaka">Dhaka</optiosn>
        </select>

        <input onChange={(e) => {inputOnChange("gender", "Male")}} checked={FormObj.gender === "Male"} type="radio" name="gender"/>Male
        <input onChange={(e) => {inputOnChange("gender", "Female")}} checked={FormObj.gender === "Female"} type="radio" name="gender"/>Female
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
