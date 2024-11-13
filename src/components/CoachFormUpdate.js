import React from "react"; //importing react 
import { useState } from "react"; //importind use State from react

//creating a function that will export to app
export default function CoachFormUpdate(){

    //variable to hold input values, start with an empty string
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [assistant, setAssistant] = useState("");

    //event listener for button click
    const submitCoach = (event) => {
        //prevents the page from just refreshing        
        event.preventDefault();

         //alert if all input fields aren't filled
        if(!id){
            alert('Please Enter ID');
            return;
        }
         if(!name){
            alert('Please Enter Name');
            return;
        }
        if(!team){
            alert("Please Enter Team");
            return;
        }
        if(!assistant){
            alert("Please Enter Assistant");
            return;
        }
        

        //log for testing
        console.log({id, name, team, assistant});

        //after submit set inputs back to empty strings
        setId("");
        setName("");
        setTeam("");
        setAssistant("");
    }
    
    //CSS in JS to style form
    const formStyle = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        justifyContent: 'center',
    }

    //CSS in JS to style lables 
    const lableStyle = {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        paddingTop: '10px',
    }

    //CSS in JS to style inputs 
    const inputStyle = {
        padding: '7px',
        margingTop: '1px',
        width: '200px'
    }

    //CSS in JS to Style butons
    const buttonStyle = {
        justifyContent: 'center',
    }
    
    //return to app
    return(    
        <form style={formStyle} onSubmit={submitCoach}>
            <label style={lableStyle}>ID:
            <input style={inputStyle} type="number" placeholder="ID" onChange={(e) => setId(e.target.value)}></input>
            </label>
            
            <label style={lableStyle}>Name:
            <input style={inputStyle} type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label>

            <label style={lableStyle}>Team:
            <input style={inputStyle} type="text" placeholder="Team Name" value={team} onChange={(e) => setTeam(e.target.value)}></input>
            </label>
        
            <label style={lableStyle}>Assistant:
            <input style={inputStyle} type="text" placeholder="Assistant Name" value={assistant} onChange={(e) => setAssistant(e.target.value)}></input>
            </label>
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    )
}