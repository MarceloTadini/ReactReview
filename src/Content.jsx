import React from "react";
import './Content.css'

function Content({children}) {
    return(
        <article className="content">
            {children}
        </article>
    )
}

export default Content