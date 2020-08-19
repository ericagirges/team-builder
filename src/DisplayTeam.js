import React from "react";
import styled from "styled-components";


//team member container styling
const TeamContainer = styled.div `
    margin-top: 70px;
    font-family: "Fira Sans";
    font-size: 1.4em;
    color: white;

`

const TeamMembers = styled.div `
    color: black;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    margin: 40px 40px 40px 40px;
    box-shadow: 5px 10px 10px black;

    img {
        margin-top: 30px;
        height: 100px;
        width: auto;
    }

    p {
        text-align: left;
        margin-left: 10px;
        font-size: 0.8em;
    }

`

const DisplayTeam = props => {
    const { details } = props

    if (!details) {
        return <h3>Loading Team info...</h3>
    }

    return (
        <TeamContainer>
        <TeamMembers>
            <img src="/avatar-2.png" alt="avatar"/>
            <h3>{details.firstName} {details.lastName}</h3>
            <p>Cohort: {details.cohort}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </TeamMembers>
        </TeamContainer>
    )
}

export default DisplayTeam;