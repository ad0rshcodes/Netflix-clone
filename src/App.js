import React, {useState} from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import {Past} from "./History"
function App() {
  const [History, setHistory] = useState([]);

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row History={History} setHistory={setHistory} isLargeRow title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row History={History} setHistory={setHistory} title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row History={History} setHistory={setHistory} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row History={History} setHistory={setHistory} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row History={History} setHistory={setHistory} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row History={History} setHistory={setHistory} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row History={History} setHistory={setHistory} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Past History={History} title="History" />
    </div>
  );
}

export default App;
