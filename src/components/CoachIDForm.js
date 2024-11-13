import React from "react" //importing react 
import { useState } from "react"; //importind use State from react
import axios from "axios" //import axios to my API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function IDForm(){

    //variable to hold input values, start with an empty string
    const [id, setId] = useState("");

    //event listener for button click
    const findId = async (event) => {
        //prevents the page from just refreshing 
        event.preventDefault();

        //alert if no input
        if(!id){
            alert('Please Enter ID');
            return;
        }

        //log for testing
        console.log({id})

        //start try catch
        try{
            //send get request with axios and log response in variable
            const response = await axios.get(`${teamUrl}/coaches/${id}`);
            //if found log data
            console.log("Coach Found", response.data);
        }catch(error){
            //alert user if not found
            alert("Coach Not Found.");
            //log error to console 
            console.log("Error", error);
        }
        // after submit set inputs back to empty strings 
        setId("")
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

    return(
        <form style={formStyle} onSubmit={findId}>
            <label style={lableStyle}>ID:
                <input style={inputStyle} type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}