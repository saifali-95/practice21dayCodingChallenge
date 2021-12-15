const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  const timeDifference = Math.abs(firstPosition.time - secondPosition.time);
  const altitudeDifference = Math.abs(firstPosition.altitude - secondPosition.altitude);
  const speed = (altitudeDifference / timeDifference);

  return Number(speed.toFixed(1));
};