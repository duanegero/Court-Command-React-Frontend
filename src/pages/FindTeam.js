import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SelectForm from "../components/SelectForm";

export default function FindTeam(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Find Team</h2>
            <SelectForm />
        </>
    )
}