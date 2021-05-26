import React from "react";
import "./Row.css";
import ScrollContainer from "react-indiana-drag-scroll";

export function Past({title, History}) {
    console.log(History)
    const base_url = "https://image.tmdb.org/t/p/original/";

    
    return (
      //Displaying the thumbnails for movies in History
        <div className="row">
          <h2>{title}</h2>
          <ScrollContainer className="row__posters">
            {History.map((movie) => (
              <img
                className={`row__poster`} 
                src={`${base_url}${ 
                  movie.poster_path
                }`}
                alt={movie.name}
              />
            ))}
          </ScrollContainer>
        </div>
      );

}
