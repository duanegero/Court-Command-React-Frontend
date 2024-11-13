import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerIDFormDelete from "../components/PlayerIDFormDelete";

export default function DeletePlayer(){
    useEffect(() => {
        document.title = "Delete Player"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Delete Player</h2>
            <PlayerIDFormDelete />
        </>
    )
}