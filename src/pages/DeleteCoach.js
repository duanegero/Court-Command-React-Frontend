import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import CoachIDFormDelete from "../components/CoachIDFormDelete";

export default function DeleteCoach(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Delete Coach</h2>
            <CoachIDFormDelete />
        </>
    )
}