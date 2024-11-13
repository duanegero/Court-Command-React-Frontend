import axios from "axios"; //import axios to make API calls
import React from "react"; //importing react to use in file
import { useState } from "react"; //importind use State from react
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//function to export to app
export default function PlayerForm(){
    
    //setting varibles to handle the form submissions
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");
    const [submittedData, setSubmittedData] = useState(null)


    //event for submit button
    const submitPlayer = async (event) => {
        event.preventDefault();

        //alert if all input fields aren't filled
        if(!name){
            alert('Please Enter Name');
            return;
        }
        if(!age){
            alert("Please Enter Age");
            return;
        }
        if(!email){
            alert("Please Enter Email");
            return;
        }
        if(!team){
            alert("Please Select a Team");
            return;
        }

        //Creating an object with values from input fields
        const newPlayer = {
            first_name: name,
            age: age,
            email: email,
        }

        //start try catch
        try{
            //sending a post request with object from user input
            const response = await axios.post(`${teamUrl}/${team}`, newPlayer);
            //log new player 
            console.log("Player Added", response.data);
            setSubmittedData(response.data);
        }catch(error){
            //alert user if error, log error
            alert("Player Not Added");
            console.log(error)
        }


        //logging for testing
        console.log({name, age, email, team});

        //setting fields back to empty after submit
        setName("");
        setAge("");
        setEmail("");
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

    //CSS in JS to style inputs 
    const inputStyle = {
        padding: '7px',
        margingTop: '1px',
        width: '200px'
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
    
    //return to the app 
    return( 
        <div>   
        <form style={formStyle} onSubmit={submitPlayer}>
            <label style={lableStyle}>Name:
            <input style={inputStyle} type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </label>
            
            <label style={lableStyle}>Age:
            <input style={inputStyle} type="number" placeholder="Player Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
            </label>

            <label style={lableStyle}>Email:
            <input style={inputStyle} type="email" placeholder="Player Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </label>

            <label style={lableStyle}>Team:
            <select style={selectStyle} value={team} onChange={(e) => setTeam(e.target.value)}>
                <option value="">Select a Team</option>
                <option value='team1'>Team One</option>
                <option value='team2'>Team Two</option>
                <option value='team3'>Team Three</option>
            </select>
            </label>
            <button type="submit">Submit</button>
        </form>
        {submittedData && (
            <div>
                <h3>Player Added</h3>
                <p><strong>ID:</strong> {submittedData.id}</p>
                <p><strong>Name:</strong> {submittedData.first_name}</p>
                <p><strong>Age:</strong> {submittedData.age}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Team:</strong> {submittedData.team_name}</p>
            </div>
        )}
        </div>
    )
}

