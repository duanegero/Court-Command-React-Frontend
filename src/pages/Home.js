import React, { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import PlayerForm from "../components/PlayerForm";
import styles from "../CSS modules/Page.module.css";

export default function Home(){
    useEffect(() => {
        document.title = "Home"
    })

    const paraStyle = {
        textAlign: 'center',
        // paddingTop: '10px',
        lineHeight: '1.5',
        margin: '10px 120px 10px 120px',
    }
    return(
        <>
            <Nav />
            <Header />
            <h4>Welcome to Court Command</h4>
            <p style={paraStyle}>Court Command is your all-in-one management tool for basketball clubs, designed to make roster management simple and effective. With this platform, you can easily add, update, search, and remove players and coaches from your club’s database. Keep player and coach profiles organized and accessible in one secure location, ensuring your team information is always up-to-date. Whether you're managing player details, coordinating coaching staff, or organizing teams, Court Command provides a streamlined solution to help you focus on what matters most – building winning teams!</p>
        </>
    )
}