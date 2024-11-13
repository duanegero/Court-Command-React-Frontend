import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CoachIDFormDelete from "../components/CoachIDFormDelete";

export default function DeleteCoach(){
    useEffect(() => {
        document.title = "Delete Coach"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Delete Coach</h2>
            <CoachIDFormDelete />
        </>
    )
}