const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!

  // Remember to return an object!
  const celciusTemp = Math.round(((temperature)-32)*(5/9));
  const meterSpeed = Math.round(0.44704*windSpeed);
  
  const weatherObject = {
      temperature: celciusTemp,
      windSpeed: meterSpeed,
      windDirection,
      condition
    }
  
  return weatherObject;
  
}