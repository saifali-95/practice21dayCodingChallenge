const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  const transcript = [];
  
  for(const data of exchanges) {
    console.log(data);
    transcript.push(`${data.origin}: ${data.message}`);
  }
  
  const output = {
    transcript,
    missionData
  }

  return output;

}