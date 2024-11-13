import React from "react"; //importing react 
import { useState } from "react"; //importind use State from react
import axios from "axios"; //import axios to my API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function CoachFormUpdate(){

    //variable to hold input values, start with an empty string
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [assistant, setAssistant] = useState("");
    const [submittedData, setSubmittedData] = useState(null)

    //creating an boject with values from input fields
    const updatedCoach = {
        first_name: name,
        team: team,
        assistant_coach: assistant
    }

    //event listener for button click
    const submitCoach = async (event) => {
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
        
        //starting try catch
        try{
            //sending a put request with axios, and object
            const response = await axios.put(`${teamUrl}/coaches/${id}`, updatedCoach);
            //logging response data
            console.log(response.data)
            setSubmittedData(response.data)
        }catch(error){
            //alert user and log if error 
            alert('Can Not Update Coach.');
            console.log(error)
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
        <div>
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
        {submittedData && (
            <div>
                <h3>Coach Updated</h3>
                <p><strong>ID:</strong> {submittedData.id}</p>
                <p><strong>Name:</strong> {submittedData.first_name}</p>
                <p><strong>Team:</strong> {submittedData.team}</p>
                <p><strong>Assistant:</strong> {submittedData.assistant_coach}</p>
            </div>
        )}
        </div>
    )
}