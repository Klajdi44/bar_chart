import React, { useState, useEffect } from 'react';
import { FetchData } from "./modules/fetchData";
import FrappeChart from './modules/FrappeChart';
import './App.css';

function App() {
  const [queue, setQueue] = useState('');

  useEffect(() => {

    setInterval(() => {
      FetchData('https://kea-alt-del.dk/kata-distortion/', data => {
        console.log(data);
        setQueue(data.inQueue);
      });
    }, 5000);

  }, []);
  FrappeChart(queue);


  return (
    <div className="App">
      <h1>Loading   <i className="fas fa-stroopwafel fa-spin"></i>
      </h1>

    </div>
  );
}

export default App;
