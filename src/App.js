import React, {useState} from 'react';
import './App.css';
import Form from "./Form";

const formSkeleton = {
  name: "",
  email: "",
  role: "",
}

function App() {

  const [teamMembers, setTeamMembers] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Lambda Alpha Team</h1>
      </header>
      <Form teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
