import React from "react";
import styled from "styled-components";

const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    
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
    }

    button {
        align-self: center;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        margin-top: 40px;
        
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
            <option value="frontend_engineer">Frontend Engineer</option>
            <option value="backend_engineer">Backend Engineer</option>
            <option value="ux_designer">UX Designer</option>
            <option value="project_lead">Project Lead</option>
            <option value="data_analyst">Data Anaylst</option>
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
