const checkAllGauges = (gaugeList) => {
  // Code here!
  for (const gauge of gaugeList) {
    if (gauge.current > gauge.max || gauge.current < gauge.min) {
      return false;
    }
  }
  return true;  
}