import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./Form";
import DisplayTeam from "./DisplayTeam";

const initialTeam = [
  {
    firstName: "Jack",
    lastName: "Sparrow",
    email: "captainjack@pirates.com",
    role: "Project Lead"
  },
]

const formSkeleton = {
  firstName: "",
  lastName: "",
  email: "",
  // dropdown option //
  role: "",
}

// fake axios post happens here
const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeam })
}

const fakeAxiosPost = (urlGoesHere, { firstName, lastName, email, role }) => {
  const newTeamMember = { firstName, lastName, email, role }
  return Promise.resolve({ status:200, success: true, data: newTeamMember })
}

function App() {
  // initialize state to hold values
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(formSkeleton);

  // updates form state
  const inputData = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  // submit function 
  const handleSubmit = () => {
    const teamMember = {
      // trim white space
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    // prevent submit with incomplete data
    if(!teamMember.firstName || !teamMember.lastName || !teamMember.email){
      alert("Required fields can not be left empty.")
      return
    }

    // POST to backend
    fakeAxiosPost("nonexistenturl.com", teamMember)
      .then(response => {
        const newAddition = response.data
        setTeamMembers([...teamMembers, newAddition])
      })
      .catch(error => {
        console.log("Error retrieving data")
      })
      .finally(() => {
        setFormValues(formSkeleton)
      })
  }

  useEffect(() => {
    fakeAxiosGet('standinapi.com')
    .then(response => setTeamMembers(response.data))
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lambda Alpha Team</h1>
      </header>
      {/* passing teamMember state, handleSubmit function, and function to update info on form */}
      <Form values={formValues} onSubmit={handleSubmit} inputData={inputData}/>
      {
        teamMembers.map(member => {
          return (
            // passing key and teamMember info
            <DisplayTeam key={member.lastName} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
