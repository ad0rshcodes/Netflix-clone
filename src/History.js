import React, { useState } from "react";


export function Past({title, History}) {
    console.log(History)
    return(
        <div className="row">
            <h2>{title}</h2>
            {History.map((movie) => {console.log(movie); return(<p>{movie}</p>)})}
        </div>

    )
    };


// export function Past();
// export const History;
// export Array History;


