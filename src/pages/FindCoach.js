import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import IDForm from "../components/CoachIDForm";

export default function FindCoach(){
    useEffect(() => {
        document.title = "Find Coach"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Find Coach</h2>
            <IDForm />
        </>
    )
}