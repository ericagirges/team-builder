import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./Form";
import DisplayTeam from "./DisplayTeam";

const initialTeam = [
  {
    firstName: "Jack",
    lastName: "Sparrow",
    cohort: "LABS10",
    email: "captainjack@pirates.com",
    role: "Project Lead"
  },
]

const formSkeleton = {
  firstName: "",
  lastName: "",
  cohort: "",
  email: "",
  // dropdown option //
  role: "",
}

// fake axios post happens here
const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeam })
}

const fakeAxiosPost = (urlGoesHere, { firstName, lastName, cohort, email, role }) => {
  const newTeamMember = { firstName, lastName, cohort, email, role }
  return Promise.resolve({ status:200, success: true, data: newTeamMember })
}

const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
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
      cohort: formValues.cohort.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    //stretch email validator to check if email provided is in required format
    if (!validateEmail(teamMember.email)) {
      alert("Please enter a valid email.")
      return
    }

    // prevent submit with incomplete data
    if(!teamMember.firstName || !teamMember.lastName || !teamMember.cohort || !teamMember.email || !teamMember.role){
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
      <div className="team-container">
      {
        teamMembers.map(member => {
          return (
            // passing key and teamMember info
            <DisplayTeam key={member.lastName} details={member} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
