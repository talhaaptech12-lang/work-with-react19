import React, { useState } from "react";
import User from "./User";

export default function Skills() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("Karachi");

  const [val, setval] = useState([]);
  const handleSkills = (event) => {
    if (event.target.checked) {
      setval([...val, event.target.value]);
    } else {
      setval([...val.filter((item) => item != event.target.value)]);
    }
  };
  const StudentData = [
    {
      name: "Ali",
      age: "23",
      Roll: "122",
      id: 1,
    },
    {
      name: "haleema",
      age: "2",
      Roll: "125",
      id: 2,
    },
    {
      name: "Hamza",
      age: "3",
      Roll: "22",
      id: 3,
    },
  ];
const TeacherData = [
  {
    Name: "Essa",
    Age: "22"
  },
  {
    Name: "Kamaran",
    Age: "221"
  }
]
  return (
    <div>

      <h1>Test your Skills</h1>
      <input onChange={handleSkills} type="Checkbox" id="php" value="php" />
      <label htmlFor="php">php</label>
      <br />
      <br />

      <input onChange={handleSkills} type="Checkbox" id="React" value="React" />

      <label htmlFor="React">React</label>

      <br />
      <br />
      <input onChange={handleSkills} type="Checkbox" id="Mongo" value="Mongo" />
      <label htmlFor="Mongo">Mongo</label>

      <br />
      <br />
      <input onChange={handleSkills} type="Checkbox" id="Java" value="Java" />
      <label htmlFor="Java">Java</label>
      <h1>{val.toString()}</h1>

      <input
        type="radio"
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="male"
        value={"Male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="female"
        value={"Female"}
      />
      <label htmlFor="female">Female</label>
      <br />
      <h1>Selected Gender: {gender}</h1>

      <h3>Select Ctiy</h3>

      <select
        onChange={(event) => {
          setCity(event.target.value);
        }}
        defaultValue={"Karachi"}
      >
        <option value="Delhi">Delhi</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
      </select>
      <h4>Selected City: {city} </h4>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Roll</th>
          <th>ID</th>
        </tr>

        {StudentData.map((item) => (
          <tr key={item.id}>
            
              <td>{item.name} </td>
              <td>{item.age} </td>
              <td>{item.Roll} </td>
              <td>{item.id} </td>
            
          </tr>
        ))}
      </table>

      <h2>dummy practice</h2>

      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Roll</th>
        </tr>

        <tr>
          <td>ali</td>
          <td>23</td>
          <td>212</td>
        </tr>
        <tr>
          <td>ali</td>
          <td>23</td>
          <td>212</td>
        </tr>
        <tr>
          <td>ali</td>
          <td>23</td>
          <td>212</td>
        </tr>
      </table>
      {
        TeacherData.map((Data)=>(

<div key={Data}>
      <User data={Data} />

</div>
        ))
      }
    </div>
  )
}
