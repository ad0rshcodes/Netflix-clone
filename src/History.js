import React, { useState, useEffect } from "react";

const [hist, setHist] = useState([]);
const History = (props) => {
    setHist([...hist, props.moviename]);
    console.log(hist);
};
export default History;