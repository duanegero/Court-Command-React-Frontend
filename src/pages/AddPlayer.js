import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerForm from "../components/PlayerForm";
import styles from "../CSS modules/Page.module.css";

export default function AddPlayer(){
    useEffect(() => {
        document.title = "Add Player"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>Add Player</h2>
            <PlayerForm />

        </>
    )
}