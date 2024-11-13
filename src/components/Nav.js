import { Link } from 'react-router-dom'

import styles from '../CSS modules/Nav.module.css'

export default function Nav(){
    return(
        <nav className={styles.nav}>
            <Link to="/find-player">Find Player</Link>
            <Link to="/find-coach">Find Coach</Link>
            <Link to="/add-player">Add Player</Link>
            <Link to="/add-coach">Add Coach</Link>
            <Link to="/update-player">Update Player</Link>
            <Link to="/update-coach">Update Coach</Link>
            <Link to="/delete-player">Delete Player</Link>
            <Link to="/delete-coach">Delete Coach</Link>
            <Link to="/find-team">Find Team</Link>
        </nav>
    )
}