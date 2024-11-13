import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerIDFormDelete from "../components/PlayerIDFormDelete";

export default function DeletePlayer(){
    return(
        <>
            <Nav />
            <Header />
            <h2>Delete Player</h2>
            <PlayerIDFormDelete />
        </>
    )
}