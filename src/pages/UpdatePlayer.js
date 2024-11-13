import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerFormUpdate from "../components/PlayerFormUpdate";

export default function UpdatePlayer(){
    useEffect(() => {
        document.title = "Update Player"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Update Player</h2>
            <PlayerFormUpdate />
        </>
    )
}