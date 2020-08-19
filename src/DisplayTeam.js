import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div `
    margin-top: 70px;
    font-family: "Fira Sans";
    font-size: 1.4em;
    color: white;
    display: flex;
    justify-content: space-evenly;

`

const TeamMembers = styled.div `
    color: black;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    margin-top: 40px;

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
            <h3>{details.firstName} {details.lastName}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </TeamMembers>
        </TeamContainer>
    )
}

export default DisplayTeam;