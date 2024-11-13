import React from "react"; //importing react to use in file
import { useState } from "react"; //importind use State from react

//function to export to app
export default function PlayerFormUpdate(){
    
    //setting varibles to handle the form submissions
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("");

    //event for submit button
    const submitPlayer = (event) => {
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

        //logging for testing
        console.log({id, name, age, email, team});

        //setting fields back to empty after submit
        setId("");
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
        <form style={formStyle} onSubmit={submitPlayer}>
            <label style={lableStyle}>ID:
            <input style={inputStyle} type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></input>
            </label>

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
    )
}