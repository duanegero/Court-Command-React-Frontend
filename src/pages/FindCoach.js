import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import IDForm from "../components/CoachIDForm";

export default function FindCoach(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Find Coach</h2>
            <IDForm />
        </>
    )
}