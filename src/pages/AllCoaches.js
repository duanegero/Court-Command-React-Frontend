import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import GetAllCoaches from "../components/GetAllCoaches";

export default function AllCoaches(){
    useEffect(() => {
        document.title = "All Coaches"
    })
    return(
        <>
            <Nav />
            <Header />
            <h2>All Coaches</h2>
            <GetAllCoaches />
        </>
    )
}