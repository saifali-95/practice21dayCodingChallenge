const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  const day1 = new Date(launchDate);
  const day2 = new Date(today); 
  const daysDifference = Math.abs(day2-day1);
  const daysRemaining = daysDifference/(1000 * 3600 * 24);
  
  // Code here!
  return {
    missionName,
    daysRemaining  
  }
}