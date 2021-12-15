const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let sum = 0;
  for(const item of weatherEntries) {
    sum = sum + item.windSpeed;
  }
  
  return Math.round(sum/(weatherEntries.length));
}