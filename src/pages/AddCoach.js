import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CoachForm from "../components/CoachForm";

export default function AddCoach(){
    useEffect(() => {
        document.title = "Add Coach"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Add Coach</h2>
            <CoachForm />
        </>
    )
}