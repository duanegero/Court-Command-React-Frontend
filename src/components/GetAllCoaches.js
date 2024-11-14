import React from "react"; //importing react 
import { useState } from "react"; //importind use State from react
import axios from "axios" //import axios to make API calls
const teamUrl = 'http://localhost:3001'; //setting variable for root URL

export default function GetAllCoaches(){

    const [allCoaches, setAllCoaches] = useState([])

    const findCoaches = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.get(`${teamUrl}/coaches`)

            console.log(response.data);
            setAllCoaches(response.data);
        } catch(error) {
            alert("Can Not Find Coaches")
            console.log("Error", error)
        }

    }
    return(
        <div>
            <button type="submit" onClick={findCoaches}>Find</button>
            {allCoaches.length > 0 && (
                <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '80%' }}>
                    <thead>
                        <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Coach ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team:</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Assistant Coach</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCoaches.map((coach, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{coach.id}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{coach.first_name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{coach.team}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{coach.assistant_coach}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}