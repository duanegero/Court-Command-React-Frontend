import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CoachFormUpdate from "../components/CoachFormUpdate";

export default function UpdateCoach(){
    useEffect(() => {
        document.title = "Update Coach"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Update Coach</h2>
            <CoachFormUpdate />
        </>
    )
}