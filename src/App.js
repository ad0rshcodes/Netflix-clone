import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row isLargeRow title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comdy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="BRomance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Google Docs © umentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
