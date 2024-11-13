import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CoachFormUpdate from "../components/CoachFormUpdate";

export default function UpdateCoach(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Update Coach</h2>
            <CoachFormUpdate />
        </>
    )
}