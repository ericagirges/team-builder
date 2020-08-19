import React from "react";
import styled from "styled-components";

const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    
`

const FormStyler = styled.form`
    width: 400px;
    height: 450px;
    border: 1px solid #a8a8a8;
    border-radius: 10px;
    font-family: "Fira Sans";
    font-weight: 600;
    background-color: whitesmoke;
`

const InputFields = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 50px;
    font-weight: 400;
    height: 300px;
    width: 400px;

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 350px;
        line-height: 26px;
        margin-bottom: 10px;
}

    input {
        height: 30px;
        width: 200px;
        flex: 0 0 200px;
        margin-left: 20px;
        font-family: "Fira Sans"
    }

    input:hover {
        border-color: #CD0707;
    }

    button {
        align-self: center;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        margin-top: 40px;
        background-color: #FDB300;
        font-family: "Fira Sans";
        font-weight: 600;
        font-size: 14px;
        
    }
   
`


const Form = (props) => {
  //pass in props
  const { values, onSubmit, inputData } = props;
  //to display new text in input
  const onChange = (event) => {
    const { name, value } = event.target;
    inputData(name, value);
  };

  const submit = (event) => {
    event.preventDefault(onSubmit());
  };

  

  return (
      <FormContainer>
    <FormStyler className="form-container">
      <div>
        <h2>Add a New Team Member</h2>
      </div>
      <InputFields classname="input-fields">
          
        <label>
          First Name:&nbsp;
          <input
            type="text"
            value={values.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="Jane"
            maxLength="20"
          />
        </label>
       
        <label>
          Last Name:&nbsp;
          <input
            type="text"
            value={values.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Doe"
            maxLength="20"
          />
        </label>

        <label>
          Cohort:&nbsp;
          <input
            type="text"
            value={values.cohort}
            onChange={onChange}
            name="cohort"
            placeholder="WEB9"
            maxLength="10"
          />
        </label>
       
        <label>
          Email:&nbsp;
          <input
            type="text"
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="youremail@email.com"
            maxLength="30"
          />
        </label>
       
        <label>
          Role:&nbsp;
          {/* 🔥 STEP 9 - Make dropdown for role. Dropdowns look very different
            but they can often use the same change handler text inputs use */}
          <select onChange={onChange} value={values.role} name="role">
            <option value="">Select a Role</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Project Lead">Project Lead</option>
            <option value="Data Analyst">Data Anaylst</option>
          </select>
          </label>
      
        <button
          onClick={submit}
          disabled={
            !values.firstName ||
            !values.lastName ||
            !values.email ||
            !values.role
              ? true
              : false
          }
        >
          submit
        </button>
      </InputFields>
    </FormStyler>
    </FormContainer>
  );
};

export default Form;
