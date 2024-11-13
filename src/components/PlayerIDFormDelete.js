import React from "react" //importing react 
import { useState } from "react"; //importind use State from react
import axios from "axios" //import axios to make API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function PlayerIDFormDelete(){

    //variable to hold input values, start with an empty string
    const [id, setId] = useState("");
    const [team, setTeam] = useState("")

    //event listener for button click
    const PlayerFindId = async (event) => {
        //prevents the page from just refreshing 
        event.preventDefault();

        //alert if no input
        if(!team){
            alert("Please Select a Team");
            return;
        }
        if(!id){
            alert('Please Enter ID');
            return;
        }

        //log for testing
        console.log({id, team})

        //start try catch
        try{
            //send get request with axios and log response in variable
            const response = await axios.get(`${teamUrl}/${team}/${id}`);
                //if response ok
                if(response.status === 200){
                    //ask user to confim delete
                    const isConfirmed = window.confirm(`Are you sure you want to delete Player ${id} from Team ${team}`)

                    //if confirmed 
                    if(isConfirmed){
                        //send delete request to API
                        await axios.delete(`${teamUrl}/${team}/${id}`)

                        //alert user of delete 
                        alert(`Player ${id} from Team ${team} deleted`)
                    }
                } else {
                    //if player not found alert user 
                    alert("Player not found. Try again");
                    return;
                }
        }catch(error){
           //if player not found alert user 
           if (error.response && error.response.status === 404) {
            alert('Player not found. Try again');
            } else {
            //log other errorss
            console.log('Error', error);
            }
        }
        // after submit set inputs back to empty strings 
        setId("");
        setTeam("");
    }

    //CSS in JS to style form
    const formStyle = {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
    }

    //CSS in JS to style lables 
    const lableStyle = {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column'
    }

    //CSS in JS to style inputs 
    const inputStyle = {
        padding: '7px',
        marginTop: '1px',
        width: '50px',
        marginBottom: '10px'
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
        <form style={formStyle} onSubmit={PlayerFindId}>
             <label style={lableStyle}>Team:
                <select style={selectStyle} value=  {team} onChange={(e) => setTeam(e.target.value)}>
                    <option value="">Select a Team</option>
                    <option value='team1'>Team One</option>
                    <option value='team2'>Team Two</option>
                    <option value='team3'>Team Three</option>
                </select>
            </label>
            <label style={lableStyle}>ID:
                <input style={inputStyle} type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
