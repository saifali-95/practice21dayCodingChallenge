const checkGaugeStatus = (gauge) => {
  // Code here!

  // Remember to return a value!
  if (gauge.current >= gauge.min && gauge.current <= gauge.max) {
    return true;
  } else {
    return false;
  }

}