import React from "react"; //importing react 
import { useState } from "react"; //importind use State from react
import axios from "axios" //import axios to make API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function SelectForm(){

    //variable to hold input values, start with an empty string
    const [team, setTeam] = useState("");

    //event listener for button click
    const submitTeam = async (event) => {
        //prevents the page from just refreshing 
        event.preventDefault();

        //alert if all input fields aren't filled
        if(!team){
            alert("Please Select a Team");
            return;
        }

        //start try catch
        try{
            //send get request axios
            const response = await axios.get(`${teamUrl}/${team}`)

            //log data returned from API
            console.log(response.data);
        } catch(error){
            //alert if error, log error
            alert("Team not fond")
            console.log('Error', error)
        }

        //log for testing
        console.log({team});

        //after submit set inputs back to empty strings 
        setTeam("");
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

     //CSS in JS to style select
     const selectStyle = {
        padding: '10px',
        fontSize: '16px',
        border: '2px solid #ccc',
        borderRadius: '4px',
        width: '200px',
        paddingTop: '10px',
        textAlign: 'center'
    }

    return(
        <form style={formStyle} onSubmit={submitTeam}>
            <label style={lableStyle}>Team:
                <select style={selectStyle} value=  {team} onChange={(e) => setTeam(e.target.value)}>
                    <option value="">Select a Team</option>
                    <option value='team1'>Team One</option>
                    <option value='team2'>Team Two</option>
                    <option value='team3'>Team Three</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}