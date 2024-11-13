import React from "react" //importing react 
import { useState } from "react"; //importing use State from react
import axios from "axios" //import axios to make API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

//creating a function that will export to app
export default function CoachIDFormDelete(){

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
            //send a get request to make sure coach is there
            const response = await axios.get(`${teamUrl}/coaches/${id}`);
                //if coach in list
                if(response.status === 200){
                    //asking user to confirm deletion 
                    const isConfirmed = window.confirm(`Are you sure you want to delete Coach: ${id} ?`);

                    //if user confirms delete
                    if(isConfirmed){
                        //Sending a DELETE request to API to delete requested coach ID 
                    await axios.delete(`${teamUrl}/coaches/${id}`);
                    //alret user that delete successful
                    alert(`Coach: ${id} deleted.`);
                    }
                } else {
                    //alert if coach not found
                    alert("Coach not found. Try again");
                    return;
                }
        } catch(error) {
            //if coach not found alert user 
            if (error.response && error.response.status === 404) {
            alert('Coach not found. Try again');
            } else {
            //log other errorss
            console.log('Error', error);
            }
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