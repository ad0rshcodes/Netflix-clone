import React, { useState } from "react";
import "./Row.css";
import ScrollContainer from "react-indiana-drag-scroll";
export function Past({title, History}) {
    console.log(History)
    const base_url = "https://image.tmdb.org/t/p/original/";

    
    return (
        <div className="row">
          <h2>{title}</h2>
          <ScrollContainer className="row__posters">
            {History.map((movie) => (
              <img
                // key={movie.id}
                className={`row__poster`} //use && if theres no else or : otherwise use ?
                src={`${base_url}${
                  movie.poster_path
                }`}
                alt={movie.name}
              />
            ))}
          </ScrollContainer>
        </div>
      );
    // return(
    //     <div className="row">
    //         <h2>{title}</h2>
    //         {History.map((movie) => {console.log(movie.name); return(<p>{movie.pos}</p>)})} 
    //     </div>
    // )
    // };


// export function Past();
// export const History;
// export Array History;

            }
