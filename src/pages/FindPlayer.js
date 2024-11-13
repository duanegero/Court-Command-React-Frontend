import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerIDForm from "../components/PlayerIDForm";

export default function FindPlayer(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Find Player</h2>
            <PlayerIDForm />
        </>
    );
}