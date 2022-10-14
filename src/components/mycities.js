import './App.css';
import React, { useEffect, useState } from "react";
import './components/navbar'


export default function App() {

  const [city, setCity] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCity(position.city.state);
      });

      await fetch(`${process.env.REACT_APP_API_URL}weather?q=denver,&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [city])


  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}

    </div>
  );
}
useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCity(position.city.state);
      });

      await fetch(`${process.env.REACT_APP_API_URL}weather?q=dallas,&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [city])


  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}

    </div>
  );
