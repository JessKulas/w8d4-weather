import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
import './navbar'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Feels Like: {weatherData.sys.feelslike} &deg;C</p>
        <p>Humidity: {weatherData.sys.humidity}</p>
        <p>Description: {weatherData.weather[0].description}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
