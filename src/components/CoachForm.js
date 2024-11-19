import React from "react"; //importing react 
import { useState } from "react"; //importind use State from react
import styles from "../CSS modules/Button.module.css" //import style for button
import axios from "axios"; //import axios to my API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function CoachForm(){

    //variable to hold input values, start with an empty string
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [assistant, setAssistant] = useState("");
    const [submittedData, setSubmittedData] = useState(null)

    //Creating an object with values from input fields
    const newCoach = {
        first_name: name,
        team: team,
        assistant_coach: assistant
    }

    //event listener for button click
    const submitCoach = async (event) => {
        //prevents the page from just refreshing 
        event.preventDefault();

        //alert if all input fields aren't filled
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

        //start try catch
        try{
            //sending a post request with new object
            const response = await axios.post(`${teamUrl}/coaches`, newCoach);
            //logging new coach info
            console.log('Coach Added', response.data);
            setSubmittedData(response.data)
        } catch (error) {
            //alerting usering of error
            alert("Coach not created ")
            //log error 
            console.log("Error", error)
        }
        //log for testing
        console.log({name, team, assistant});

        //after submit set inputs back to empty strings 
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
            <label style={lableStyle}>Name:
            <input style={inputStyle} type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label>

            <label style={lableStyle}>Team:
            <input style={inputStyle} type="text" placeholder="Team Name" value={team} onChange={(e) => setTeam(e.target.value)}></input>
            </label>
        
            <label style={lableStyle}>Assistant:
            <input style={inputStyle} type="text" placeholder="Assistant Name" value={assistant} onChange={(e) => setAssistant(e.target.value)}></input>
            </label>
            <button type="submit" style={buttonStyle} className={styles.button}>Submit</button>
        </form>
        {submittedData && (
            <div>
                <h3>Coach Added</h3>
                <p><strong>ID:</strong> {submittedData.id}</p>
                <p><strong>Name:</strong> {submittedData.first_name}</p>
                <p><strong>Team:</strong> {submittedData.team}</p>
                <p><strong>Assistant:</strong> {submittedData.assistant_coach}</p>
            </div>
        )}
        </div>
    )
}