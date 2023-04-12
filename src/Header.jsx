import React from "react";
import './Header.css'

function Header({titulo, subtitulo}) {
    return(
        <header className="header">
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
        </header>
    )
}

export default Header